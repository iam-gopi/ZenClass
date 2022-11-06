//const name = prompt("Enter your name"); // get input from user
//console.log(name);
//alert("is it?"); // show some popup message

//const a = confirm("are you sure to delete"); // get confirmation from user
//console.log(a);

// runs only once after time elapsed
// const id = setTimeout(() => {
//   console.log("from set timtout");
// }, 10000);

// clearTimeout(id);

// const id = setInterval(() => {
//   console.log("from interval method");
// }, 1000);

// setTimeout(() => {
//   console.log("stopping interval method execution");
//   clearInterval(id);
// }, 40000);

// create element

const para = document.createElement("p"); // create p element
para.innerHTML = "this is JS created element"; // set text to p tag
para.setAttribute("id", "para"); // set id
para.setAttribute("title", "para"); // set title

const div = document.createElement("div"); // create div tag
div.setAttribute("id", "mdiv"); // set id to div
div.innerText = "this is the parent div. Created in JavaScript"; // set text to div
div.appendChild(para); // adding p tag inside div tag

document.body.appendChild(div); // adding div tag inside body tag

// just to remove above div after 10 sec from html page
setTimeout(() => {
  div.remove(); // removing entire div from HTML

  const newD = document.createElement("div"); // create new div
  newD.innerHTML = "All existing div removed"; // set text to div
  document.body.append(newD); // add new div to body tag
}, 10000);
