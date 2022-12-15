const createLabel = (text) => {
  let label = document.createElement("label");
  label.textContent = text;
  label.classList.add("label");
  return label;
};

const createTextBox = (type, id) => {
  let txt = document.createElement("input");
  txt.setAttribute("id", id);
  txt.setAttribute("type", type);
  txt.setAttribute("required", true);
  txt.setAttribute("class", "txt");

  return txt;
};

const formSubmitHandler = (event) => {
  event.preventDefault();

  const name = document.getElementById("txtName").value;
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  const cpassword = document.getElementById("txtCPassword").value;

  if (password !== cpassword) {
    alert("password should match");
    document.getElementById("txtPassword").value = "";
    document.getElementById("txtCPassword").value = "";
  }

  const obj = { name, email, password, confirmPassword: cpassword };
  localStorage.setItem("details", JSON.stringify(obj));
};

let form = document.createElement("form");
form.addEventListener("submit", formSubmitHandler);
form.classList.add("form");

let div = document.createElement("div");
div.append(createLabel("Name"));
div.append(createTextBox("text", "txtName"));
form.append(div);

let div1 = document.createElement("div");
div1.append(createLabel("Email"));
div1.append(createTextBox("email", "txtEmail"));
form.append(div1);

let div2 = document.createElement("div");
div2.append(createLabel("Password"));
div2.append(createTextBox("password", "txtPassword"));
form.append(div2);

let div3 = document.createElement("div");
div3.append(createLabel("Confirm Password"));
div3.append(createTextBox("password", "txtCPassword"));
form.append(div3);

let btn = document.createElement("button");
btn.textContent = "Register";
form.append(btn);

const container = document.getElementById("parent-container");
container.append(form);
