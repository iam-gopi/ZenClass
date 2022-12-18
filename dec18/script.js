const base = "https://63539e82ccce2f8c02f9ceee.mockapi.io";

const getAll = () => {
  const result = sendRequest(`${base}/api`);
  console.log(result);
  // fetch(`${base}/api`)
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((er) => console.error(er));
};

const getById = (id) => {
  fetch(`${base}/api/${id}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    })
    .catch((er) => console.error(er));
};

const add = (requestBodyContent) => {
  fetch(`${base}/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBodyContent),
  }).catch((er) => console.error(er));
};

const update = (requestBodyContent, id) => {
  fetch(`${base}/api/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBodyContent),
  }).catch((ex) => console.error(ex));
};

const deleteRecord = (id) => {
  // fetch(`${base}/api/${id}`, {
  //   method: "DELETE",
  // }).catch((er) => console.error(er));

  sendRequest(`${base}/api/${id}`, { method: "DELETE" });
};

const sendRequest = (url, payload = null) => {
  return fetch(url, payload)
    .then((data) => data.json())
    .then((data) => data)
    .catch((er) => console.error(er));
};
