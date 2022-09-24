// hoisting - variable
// console.log(a);
// var a = 10;
// console.log(a);

// print();

// function test() {
//   console.log("from print function");
// }

let students = [];

function total() {
  for (let index = 0; index < students.length; index++) {
    let sum = 0;
    let studentMarks = students[index].marks;
    for (let index1 = 0; index1 < studentMarks.length; index1++) {
      sum += studentMarks[index1];
    }
    students[index]["total"] = sum;
  }
}

function average() {
  for (let index = 0; index < students.length; index++) {
    const totalSubject = students[index].marks.length;
    students[index]["average"] = students[index].total / totalSubject;
  }
}

function grade() {
  for (let index = 0; index < students.length; index++) {
    if (students[index].average > 3) students[index]["grade"] = "pass";
    else students[index]["grade"] = "fail";
  }
}

function print() {
  console.log(students);
}

function addStudent() {
  for (let index = 0; index < 5; index++) {
    let student = {};
    student["id"] = index + 1;
    student["name"] = "Std" + index;
    student["dept"] = "cse";
    student["marks"] = [1 * index, 2, 3 * index, 4, 5 * index];
    students.push(student);
  }
}

addStudent();
total();
average();
grade();
print();
