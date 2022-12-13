const paragraph = document.createElement("p");
paragraph.innerText = "JS generated content";

const inputUserName = document.createElement("input");
inputUserName.setAttribute("placeholder", "Enter your email");
inputUserName.setAttribute("type", "email");

const div = document.createElement("div");
// div.append(paragraph, inputUserName);
// div.append("this is div");
const a = div.appendChild(paragraph);

console.log(a);

document.body.append(div);
