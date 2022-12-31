const baseURL = "https://63539e82ccce2f8c02f9ceee.mockapi.io/";

const getAllDetails = async () => {
  const response = await fetch(`${baseURL}/api`);
  populateGrid(await response.json());
};

const populateGrid = (data) => {
  let tableTr = "";
  data.map((x) => {
    tableTr += `<tr>
  <th scope="row">${x.id}</th>
  <td>${x.name}</td>
  <td><img src="${
    x.avatar
  }" class="img-fluid rounded-circle shadow" style="width:2rem"></td>
  <td>${new Date(x.createdAt).toLocaleString()}</td>
  <td><button id="delete" class="btn btn-danger btn-sm">Delete</button></td>
  <td><button id="edit" class="btn btn-success btn-sm">Edit</button></td>
  </tr>`;
  });
  let tbody = document.getElementById("tableBodyContent");
  tbody.innerHTML = tableTr;
};

getAllDetails();

const clickHandler = async function () {
  const userName = prompt("Enter your name");

  if (userName === "" || userName === null) {
    alert("name is mandatory");
    return;
  }

  const requestObj = { name: userName };
  try {
    await fetch(`${baseURL}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObj),
    });
    getAllDetails();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
