import {validateIp} from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const searchBtn = document.querySelector(".search-bar__btn"); 

searchBtn.addEventListener('click', getLocationByIp);
ipInput.addEventListener('keydown', handleKey);


function getLocationByIp() {
   if (validateIp(ipInput.value)) {
       fetch(
           `https://geo.ipify.org/api/v2/country?apiKey=at_PSx2clyFN6O8duE0ElxWqPuiCgCFc&ipAddress=${ipInput.value}`)
               .then(response => response.json())
               .then(console.log);
   }
}

function handleKey(e) {
    if (e.key === "Enter") {
        getLocationByIp();
    }
}