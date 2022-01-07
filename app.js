const url = "http://ip-api.com/json/?fields=61439";
const input = document.querySelector("#input").value;
const button = document.querySelector("#submit");
let ipAddress = document.querySelector(".ip");
let loc = document.querySelector(".location");
let timeZone = document.querySelector(".time");
let isp = document.querySelector(".isp");

const getData = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    const userData = {
      country: data.country,
      city: data.city,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      ip: data.query,
    };

    ipAddress.innerHTML = userData.ip;
    loc.innerHTML = userData.city + ", " + userData.country;
    timeZone.innerHTML = userData.timezone;
    isp.innerHTML = userData.isp;
  } catch (error) {
    console.log(error);
  }
};

getData();

button.addEventListener("click", async () => {
  try {
    let ip = document.querySelector("#input").value;
    const url2 = `http://ip-api.com/json/${ip}?fields=61439`;
    console.log(url2);
    let response = await fetch(url2);
    let data = await response.json();
    const userData = {
      country: data.country,
      city: data.city,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      ip: data.query,
      status: data.status,
    };

    if (userData.status === "success") {
      ipAddress.innerHTML = userData.ip;
      loc.innerHTML = userData.city + ", " + userData.country;
      timeZone.innerHTML = userData.timezone;
      isp.innerHTML = userData.isp;
    } else throw new Error();
  } catch (error) {
    alert(`Please enter a valid ip address`);
  }
});

var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VzcGljaW91c2NvdWNoIiwiYSI6ImNreTRqNnl0eDBjZXoybnE5Y2NybTMwNjEifQ.gEqz2W_1TLNSXcf0XHmVIg",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic3VzcGljaW91c2NvdWNoIiwiYSI6ImNreTRqNnl0eDBjZXoybnE5Y2NybTMwNjEifQ.gEqz2W_1TLNSXcf0XHmVIg",
  }
).addTo(map);
