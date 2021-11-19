//Past 7 days, all earthquakes.
var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

function createMap(earthquakes) {

    //var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //});

    var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: "Map data &copy; <a href=\'https://www.openstreetmap.org/\'>OpenStreetMap</a> contributors, <a href=\'https://creativecommons.org/licenses/by-sa/2.0/\'>CC-BY-SA</a>, Imagery © <a href=\'https://www.mapbox.com/\'>Mapbox</a>",
        id: "mapbox/light-v10",
        accessToken: API_KEY
    });

    var baseMaps = {
        "Light Map": lightMap,
    };

    var overlayMap = {
        "Earthquakes": earthquakes
    };

    var myMap = L.map("map", {
        center: [32.7157, -117.1611],
        zoom: 3,
        layers: [lightMap, earthquakes]
    });

    L.control.layers(baseMaps, overlayMap, {
        collapsed: false
    }).addTo(myMap);
}

function CreateMarkers(response) {



}

createMap();