const key = "0c58cb0c9c120d27a86d7b0967d97d16";
const baseURL = "http://api.aviationstack.com/v1";

const getAllAirports = async () => {
  const url = `${baseURL}/airports?access_key=${key}`;
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);
  populateCard(result.data);

  //fetch().then(data=>data.json()).then(data=>console.log(data))
};

const populateCard = (airportDetails) => {
  let airportDetailsInHMTL = "";

  airportDetails.map((x) => {
    airportDetailsInHMTL += `<div
    class="shadow border-1 rounded p-3 m-2"
    style="width: 20rem"
  >
    <div>
      <label for="">IATA Code:</label>
      <label for="">${x.iata_code}</label>
    </div>
    <div>
      <label for="">Airport ID:</label>
      <label for="">${x.airport_id}</label>
    </div>

    <label for="">Airport Name:</label>
    <label for="">${x.airport_name}</label>

    <label for="">Country Name:</label>
    <label for="">${x.country_name}</label>

    <label for="">Lat:</label>
    <label for="">${x.latitude}</label>

    <label for="">Lng:</label>
    <label for="">${x.longitude}</label>
  </div>`;
  });

  document.getElementById("airportDetailsContainer").innerHTML =
    airportDetailsInHMTL;
};

getAllAirports();
