const BASE_URL = "https://63539e82ccce2f8c02f9ceee.mockapi.io";

const getAllRecords = async () => {
  const response = await fetch(`${BASE_URL}/api`);
  const records = await response.json();
  prepareGrid(records);
};

const prepareGrid = (records) => {
  let tableContent = "";

  records.map((record) => {
    tableContent += `<tr>
    <th scope="row">${record.id}</th>
    <td>${record.name}</td>
    <td><img src="${
      record.avatar
    }" style="width:2rem;" class="rounded shadow" alt="img"> </td>
    <td>${new Date(record.createdAt).toLocaleDateString()}</td>
    <td>
    <button type="button" class="btn btn-danger" 
    onclick="deleteHandler(${record.id},'${record.name}')">
    <img src="../../Assets/delete.png" style="width:1rem"  alt="delete icon" />
    </button>
    <button type="button" class="btn btn-warning" 
    onclick="editHandler(${record.id})">
    <img src="../../Assets/edit.png" style="width:1rem"  alt="edit icon" />
    </button>
    </td>
  </tr>`;
  });

  document.getElementById("tbody").innerHTML = tableContent;
};

const deleteHandler = (id, name) => {
  if (confirm(`Are you sure to delete ${name} record?`)) {
    if (deleteRecord(id)) {
      showAlert("Record deleted successfully", "success");
      getAllRecords();
    } else showAlert("Record deleted successfully", "warning");
  }
};

const deleteRecord = async (id) => {
  try {
    await fetch(`${BASE_URL}/api/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch (er) {
    console.error(er);
    return false;
  }
};

const addBtn = document.getElementById("btnAdd");
addBtn.addEventListener("click", () => {
  const name = prompt("Enter your name");

  if (name === "" || name === null) {
    alert("name is mandatory");
    return;
  }
  addRecord({ name });
  // showAlert("Record Added successfully", "success");
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
});

const addRecord = async (record) => {
  await fetch(`${BASE_URL}/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //,"Authorization": "Bearer token"
    },
    body: JSON.stringify(record),
  });
  await getAllRecords();
};

const editHandler = (id) => {
  const name = prompt("Enter your name");

  if (name === "" || name === null) {
    alert("name is mandatory");
    return;
  }
  updateRecord(id, { name });
  showAlert("Record updated successfully", "success");
  getAllRecords();
};

const updateRecord = async (id, record) => {
  await fetch(`${BASE_URL}/api/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record),
  });
};

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const showAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

getAllRecords();
