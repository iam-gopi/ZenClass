// POST request sample
// let request = new XMLHttpRequest();

// request.open("POST", "https://6326baedba4a9c47532a0349.mockapi.io/api");

// const requestData = {
//   name: "Guvi JS Mentor",
// };

// request.onload = () => {
//   console.log(request.response);
// };

// request.onerror = () => {
//   console.log(request.response);
// };
// request.setRequestHeader("Content-Type", "application/json");
// request.send(JSON.stringify(requestData));

// es6 - ecmascript 6

// spread operator
// let a = [1, 2, 3];
// let c = [4, 5, 6];
// let b = [...a, [344, 56, 342, 233, 45, 5, 4]];

// console.log(b);

// let a = { name: "Gopi", College: "Anna university" };
// let b = { ...a };

// console.log(b);
// b["dept"] = "cse";
// console.log(a);
// console.log(b);

// Rest Operator

// function printData(...a) {
//   console.log(a);
// }

// printData(1, 2, 3, 4, 5, 6, 7, 78);
// printData(1, 2);
// printData(1);

// Array destructure
// let a = [1, 2, 3, 3, 54, 5];
// const [b, , v, , g, e] = a;

// console.log(b, v, g, e);

// Object Destructure

// let student = {
//   name: "Gopi",
//   dept: "cse",
//   college: "Anna university",
//   campus: "CEG",
//   address: {
//     hm: {
//       no: 1,
//       area: "anna nagar",
//       ara: "anna nagar west",
//     },
//     tm: {
//       no: 2,
//       area: "guindy",
//     },
//   },
// };

// const { name, dept, college, campus, address } = student;
// const { hm, tm } = address;
// const { area } = hm;
// console.log(hm, tm);
// console.log(area);

// object property shorthand

// let name = "Gopi";
// let dept = "cSE";
// let college = "AU";

// let o = { name, dept, college };
// console.log(o);

// function getObject(name, dept, college) {
//   return { name, dept, college };
// }

// let a = getObject(name, dept, college);
// console.log(a);

// template Literals
// const course = "js";
// function test() {
//   return "from function";
// }
// let b = "Im learning " + course + " course"; // string concatenation
// let a = `Im learning ${3 + 4} course`; // template literals

// console.log(a);

// arrow function
// const fun = (a, b) => a + b;

// let b = fun("a", 4);
// console.log(b);
