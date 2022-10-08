// read about execution context in JavaScript

// class Student {}
// let o = new Student();
// o.addStudent();

// task 1
// let students = [{ name: "Gopi", marks: [1, 2, 3, 4, 5], dept: "cse" }];

// const prepareStudentDetails = () => {
//   for (let index = 1; index <= 2; index++) {
//     let student = {};
//     student["name"] = `studentName_${index}`;
//     student["dept"] = "cse";
//     let mark = [];
//     for (let i = 1; i <= 5; i++) {
//       mark.push(i * 10);
//     }
//     // mark[2] = 90
//     student["marks"] = mark;
//     students.push(student);
//   }
// };

// const getTotal = (marks, a, b, c, d) => marks + a + b + c + d;

// const getAverage = (total, length) => total / length;

// const getGrade = (avg) => {
//   if (avg > 50) return "a";
//   else return "f";
// };

// // Terinary operator (condition) ? "" : "" (?:)
// const getGradeWithTernary = (avg) => (avg > 50 ? "a" : "f");

// // method invocation
// prepareStudentDetails();

// for (const i of students) {
//   let a = getTotal(...i.marks);
//   i["total"] = a;
// }

// for (const i of students) {
//   const { total, marks } = i;
//   let a = getAverage(total, marks.length);
//   i["avg"] = a;
// }

// for (const i of students) {
//   const { avg } = i;
//   let a = getGradeWithTernary(avg);
//   i["grade"] = a;
// }

// console.log(students);

// map, reduce, filter & other array methods

// let a = [1, 2, 3, 4, 5];

// map
// let a1 = a.map((x) => x * 10); // callback functions

// let a1 = a.filter((x) => {
//   return x > 3;
// });

// let a1 = a.reduce((acc, curr) => {
//   return acc + curr;
// });

// let b = d.forEach((x) => {
//   let c = x * 10;
//   let p = c / 5;
//   console.log(p);
// });

let d = [1, 34, 3, 34, 90, 56, 8];

// let b = d.pop(); // remove last element
// let b = d.shift(); // remove first element
// let b = d.unshift(100); // add element at 0 index
// console.log(b);
// console.log(d);

// delete d[4];
// let a = d.splice(0, 2); // remove element
let a = d.slice(0, 3); // copy element
console.log(a);
console.log(d);
