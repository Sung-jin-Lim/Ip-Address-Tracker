// variables
// setup expressjs
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const https = require("https");
const http = require("http");

app.use(express.static("public"));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const ip = req.body.customIp;
  const url = `http://ip-api.com/json/${ip}?fields=61439`;

  async function getData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      const userData = {
        country: data.country,
        city: data.city,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
      };

      return userData;
    } catch (error) {
      console.log(error);
    }
  }
  async function renderData() {
    let data1 = getData();

    let container = document.querySelector(".ip");
    container.innerHTML = data1;
  }
  renderData();

  // http.get(url, (res) => {
  //   res.on("data", (data) => {
  //     const ipData = JSON.parse(data);
  //     const userData = {
  //       ip: ipData.query,
  //       country: ipData.country,
  //       city: ipData.city,
  //       timezone: ipData.timezone,
  //       isp: ipData.isp,
  //       org: ipData.org,
  //     };
  //     let htmlSegment = `<div class="ip">${ip}<div>`;
  //   });
  //   let container = document.querySelector(".ip");
  //   container.innerHTML = ip;
  // });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
