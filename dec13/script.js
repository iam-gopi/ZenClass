// // const paragraph = document.createElement("p");
// // paragraph.innerText = "JS generated content";

// // const inputUserName = document.createElement("input");
// // inputUserName.setAttribute("placeholder", "Enter your email");
// // inputUserName.setAttribute("type", "email");

// // const div = document.createElement("div");
// // // div.append(paragraph, inputUserName);
// // // div.append("this is div");
// // const a = div.appendChild(paragraph);

// // console.log(a);
// // document.body.append(div);

// const clickHandler = (name) => {
//   return () => console.log("from click event " + name);
// };
// //const clickHandler = () => console.log("from click event " + name);

// let btn = document.createElement("button");
// btn.textContent = "submit";

// btn.addEventListener("click", clickHandler("gopi")());

// document.body.appendChild(btn);

const form = document.createElement("form");
let input = document.createElement("input");
input.type = "text"; // you can also use setAttribute method
input.setAttribute("id", "txt");
form.appendChild(input);

let button = document.createElement("button");
button.textContent = "Read";
form.appendChild(button);

const formHandler = (event) => {
  event.preventDefault();
  const v = document.getElementById("txt").value;
  console.log(v);
};

form.addEventListener("submit", formHandler);

document.body.appendChild(form);
