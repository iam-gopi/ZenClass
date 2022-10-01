// prototype - its a object in function by default. it is empty {}
// function studentDetails() {
//   this.name = "Gopi";
//   this.dept = "Cse";
// }

// console.log(studentDetails.prototype);

// studentDetails.prototype.college = "anna university";
// console.log(studentDetails.prototype);

// studentDetails.prototype.print = function () {
//   console.log("from print function");
//   console.log(studentDetails.prototype);
// };
// studentDetails.prototype.print();

// const o = new studentDetails();
// console.log(o);
// console.log(o.__proto__);

// function test() {
//   this.name = "Gopi";
//   this.dept = "Cse";
//   this.printing = function () {
//     console.log("testing");
//   };
// }

// class

// class Car {
//   //constructor() {} // parameter less constructor
//   constructor(a) {
//     console.log("from constructor");
//     console.log(a);
//   } // parametrized constructor

//   getBrake() {}

//   fun = () => {};
// }

// const carObject = new Car(5);
// carObject.getBrake();
// carObject.fun();

// stack -> predefined data types -> memory
// heap -> class memory

// 1
// class Student {
//   constructor(student) {
//     this.calculateTotal(student.marks);
//   }
//   calculateTotal(marks) {
//     let sum = 0;
//     for (let index = 0; index < marks.length; index++) {
//       sum += marks[index]; // sum = sum + marks[index];
//     }
//     console.log(`this is the total ${sum}`);
//   }
// }

// 2
// class Student {
//   constructor() {
//     // this.calculateTotal(student);
//   }
//   calculateTotal(b) {
//     let sum = 0;
//     for (let index = 0; index < b.length; index++) {
//       sum += b[index]; // sum = sum + b[index];
//     }
//     console.log(`this is the total ${sum}`);
//   }
// }

// 3
class Student {
  constructor(marks) {
    this.b = marks;
    this.calculateTotal();
  }
  calculateTotal() {
    let sum = 0;
    for (let index = 0; index < this.b.length; index++) {
      sum += this.b[index]; // sum = sum + this.b[index];
    }
    console.log(`this is the total ${sum}`);
  }
}

// const a = { name: "Gopi", dept: "cse", marks: [1, 2, 3, 4, 5] };
// const s = new Student(a.marks);

// const a = { name: "Gopi", dept: "cse", marks: [1, 2, 3, 4, 5] };
// const s = new Student();
// s.calculateTotal(a.marks);

const a = { name: "Gopi", dept: "cse", marks: [1, 2, 3, 4, 5] };
const s = new Student(a.marks);
