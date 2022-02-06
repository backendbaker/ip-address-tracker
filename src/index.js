import {validateIp} from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const searchBtn = document.querySelector(".search-bar__btn"); 

const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

searchBtn.addEventListener('click', getLocationByIp);
ipInput.addEventListener('keydown', handleKey);


function getLocationByIp() {
   if (validateIp(ipInput.value)) {
       fetch(
           `https://geo.ipify.org/api/v2/country?apiKey=at_PSx2clyFN6O8duE0ElxWqPuiCgCFc&ipAddress=${ipInput.value}`)
               .then(response => response.json())
               .then(setInfo);
   }
}

function handleKey(e) {
    if (e.key === "Enter") {
        getLocationByIp();
    }
}

function setInfo(mapData) {
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${mapData.location.country}, ${mapData.location.region}`;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerHTML = mapData.isp;
}