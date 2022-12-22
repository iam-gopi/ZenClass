// get all records

// fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api")
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);

//     data.map((x) => {
//       console.log(x.name);
//     });
//   })
//   .catch((er) => {
//     console.log("first");
//     console.error(er);
//     return 1;
//   });

// insert new record

const requestBodyContent = {
  name: "Gopi",
  category: "mentor",
  topics: "js",
};

fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBodyContent),
})
  .then((data) => data.json())
  .then((data) => console.log(data));
