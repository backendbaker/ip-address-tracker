import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {addTileLayer, validateIp} from "./helpers";
import icon from './images/icons/icon-location.svg';

const ipInput = document.querySelector(".search-bar__input");
const searchBtn = document.querySelector(".search-bar__btn"); 

const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

searchBtn.addEventListener('click', getLocationByIp);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
});

const mapArea = document.querySelector(".map");
const map = L.map(mapArea,
    {
        center: [51.505, -0.09],
        zoom: 13,
    });
    
addTileLayer(map);
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);

function getLocationByIp() {
   if (validateIp(ipInput.value)) {
       fetch(
           `https://geo.ipify.org/api/v2/country,city?apiKey=at_PSx2clyFN6O8duE0ElxWqPuiCgCFc&ipAddress=${ipInput.value}`)
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
    const {lat, lng, country, region, city, timezone} = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${country} ${region} ${city}`;
    timezoneInfo.innerText = timezone;
    ispInfo.innerHTML = mapData.isp;

    map.setView([lat, lng], 13);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map).bindPopup(`${mapData.ip}`);
}