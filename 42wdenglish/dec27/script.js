const key = "100af2f68a5320fab2071fb517485625";
const baseURL = "http://api.aviationstack.com/v1";
let entireDetails = [];
const a1 = localStorage.getItem('data')
a1 = JSON.parse(a1)
if (a1.length > 0) {
    entireDetails = [...a1]
}

const getAllAirports = async () => {
    const url = `${baseURL}/airports?access_key=${key}`;
    if (entireDetails.length === 0) {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
        entireDetails = [...result.data]
        localStorage.setItem('data', JSON.stringify(entireDetails))
        populateCard(entireDetails);
    }

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

let searchBox = document.getElementById('search_airport')
searchBox.addEventListener('keyup', (event) => {
    let value = event.target.value;
    if (value.length <= 3) {
        return;
    } else if (value.length === 0) {
        populateCard(entireDetails)
        return;
    }
    let a = entireDetails.filter(x => x.country_name === value.trim())
    populateCard(a)
})
