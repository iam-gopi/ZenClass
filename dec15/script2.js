// a = document.getElementById("parent-container");

// b = document.getElementsByTagName("section");
// b = document.getElementsByClassName("container");
// b = document.getElementsByName("container");

// b = document.querySelectorAll(".container");
// for (let index = 0; index < b.length; index++) {
//   b[index].innerText = "dummy";
// }
// console.log(b);

let div = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
div4.innerText = "<i>this is a div</i>";
// document.body.append(div, div1, div2, div3, div4, "this is the direct text");
document.body.appendChild("this is the direct text");
