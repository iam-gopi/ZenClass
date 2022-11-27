// var addToDb = () => true;
// var doPayment = () => false;

// function AddtoDBPromise() {
//   return new Promise((resolve, reject) => {
//     const isAdded = addToDb();
//     if (isAdded) resolve("DB ADDED");
//     else reject("something went wrong 11");
//   });
// }

// let paymentPromise = new Promise((resolve, reject) => {
//   const isAdded = doPayment();
//   if (isAdded) resolve("payment");
//   else reject("something went wrong 23");
// });

// document.getElementById("btn").addEventListener("click", () => {
//   AddtoDBPromise().then().catch()
// });

// // console.log(
// //   buyPromise
// //     .then((data) => {
// //       console.log(data);
// //     })
// //     .catch((er) => {
// //       console.error(er);
// //     })
// // );

// // let a = new Promise(() => {});
// // a.then().catch();

// Promise.all([buyPromise, paymentPromise])
//   .then((data) => console.log(data))
//   .catch((er) => console.error(er));

// let a = new Promise((resolve, reject) => {
//   const isAdded = addToDb();
//   if (isAdded) resolve("DB ADDED");
//   else reject("something went wrong 11");
// });

// let a = Promise.reject({ name: "Gopi", dept: "CSE" });

fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    //let d = JSON.parse(data);
    console.log(data);
    console.log(typeof data);
  })
  .catch((er) => console.error(er))
  .catch((er) => console.error(er));
