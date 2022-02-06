import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {addOffset, addTileLayer, getAddress, validateIp} from "./helpers";
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
        getAddress(ipInput.value).then(setInfo);
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

    if(matchMedia("max-width: 1023px").matches)
    {
        addOffset(map);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getAddress('80.92.32.0').then(setInfo);
});