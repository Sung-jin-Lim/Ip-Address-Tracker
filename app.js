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
