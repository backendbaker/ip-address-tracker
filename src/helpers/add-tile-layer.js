import L from "leaflet";

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFja2VuZGJha2VyIiwiYSI6ImNremF3eG8xYjAzY2Eyc282N24zMnJ4d3IifQ.Kn4NBlY5pUzxBhWz-6u11g', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="mailto:backendbaker@gmail.com">Pavel Nechepurenko</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);

}