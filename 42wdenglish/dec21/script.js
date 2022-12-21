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
