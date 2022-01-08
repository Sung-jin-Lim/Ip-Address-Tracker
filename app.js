const url = "https://ipinfo.io/?token=0dad6273a6a035";
const input = document.querySelector("#input").value;
const button = document.querySelector("#submit");
let ipAddress = document.querySelector(".ip");
let loc = document.querySelector(".location");
let timeZone = document.querySelector(".time");
let isp = document.querySelector(".isp");
let lat = "";
let long = "";
var map = L.map("map").setView([lat, long], 13);

const getData = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    ipAddress.innerHTML = data.ip;
    loc.innerHTML = data.city + ", " + data.country;
    timeZone.innerHTML = data.timezone;
    isp.innerHTML = data.org.slice(7, data.org.length);

    latLong = data.loc.split(",");
    // map settings
    lat = latLong[0];
    long = latLong[1];

    createMap();
  } catch (error) {
    console.log(error);
  }
};

getData();

button.addEventListener("click", async () => {
  try {
    let ip = document.querySelector("#input").value;
    const url2 = `https://ipinfo.io/${ip}?token=0dad6273a6a035`;
    let response = await fetch(url2);
    let data = await response.json();

    ipAddress.innerHTML = data.ip;
    loc.innerHTML = data.city + ", " + data.country;
    timeZone.innerHTML = data.timezone;
    isp.innerHTML = data.org;
    latLong = data.loc.split(",");
    // map change
    lat = latLong[0];
    long = latLong[1];

    createMap();
  } catch (error) {
    console.log(error);
    // alert(`Please enter a valid ip address`);
  }
});

function createMap() {
  map.setView([lat, long], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VzcGljaW91c2NvdWNoIiwiYSI6ImNreTRqNnl0eDBjZXoybnE5Y2NybTMwNjEifQ.gEqz2W_1TLNSXcf0XHmVIg",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 2,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoic3VzcGljaW91c2NvdWNoIiwiYSI6ImNreTRqNnl0eDBjZXoybnE5Y2NybTMwNjEifQ.gEqz2W_1TLNSXcf0XHmVIg",
    }
  ).addTo(map);

  var greenIcon = new L.Icon({
    iconUrl: "images/icon-location.svg",
    iconSize: [35, 43],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  var marker = L.marker([lat, long], { icon: greenIcon }).addTo(map);

  map.reload = function () {
    map.remove();
    map = L.map("mapa").setView([lat, lon], 15);
  };
}
