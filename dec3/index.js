const url = "https://63539e82ccce2f8c02f9ceee.mockapi.io";

// const requestBody = {
//   name: "Gopi",
//   course: "FSD in web application",
//   language: "javascript",
// };

// fetch(`${url}/api`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(requestBody),
// })
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((er) => console.error(er));

// const mentor = "Gopisaa";

// let P = new Promise((resolve, reject) => {
//   if (mentor === "Gopi") resolve();
//   else reject();
// });

// // async and await

// async function isSameMentor() {
//   try{
//  if (mentor === "Gopi") return true;
//   }catch(er){
//   else return false;
//   }

// }

// isSameMentor()
//   .then((data) => console.log(data))
//   .catch((er) => console.error(er));

// async function getAllApiDetails() {
//   const response = await fetch(`${url}/api`);
//   const result = await response.json();
//   console.log(result);
// }

const getAllApiDetails = async () => {
  try {
    const response = await test(); //fetch(`${url}/api65469878546`);
    const result = await response.json();
    console.log(result);
  } catch (er) {
    console.log("this is from catch");
    throw er;
  }
};

function test() {}

getAllApiDetails();
