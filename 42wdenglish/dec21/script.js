const a = 10;
let promise = new Promise((resolve, reject) => {
  if (a === 10) resolve({ status: "success" });
  else reject("failure");
});

const newPromise = Promise.reject({ status: "success1" });
// const newPromise1 = Promise.reject({ status: "success1" });

// console.log(
//   newPromise
//     .then((data) => {
//       console.log("from then");
//       console.log(data);
//     })
//     .catch((er) => {
//       console.log("from catch");
//       console.error(er);
//     })
// );

Promise.all([promise, newPromise])
  .then((data) => console.log(data))
  .catch((er) => console.error(er));

let marks = [1, 2, 3, 4, 5];
function total() {
  return new Promise((resolve, reject) => {
    if (marks.length <= 0) reject("Not a valid input");
    resolve(marks.reduce((a, b) => a + b));
  });
}

function avg(total) {
  return new Promise((resolve, reject) => {
    if (total <= 0) reject("not a valid total number");
    resolve(total / marks.length);
  });
}

function grade(avg) {
  return new Promise((resolve, reject) => {
    if (avg <= 0) reject("not a valid average");
    resolve("A");
  });
}

total().then(tot => {
    avg(tot).then(av => {
        grade()
    })
})
