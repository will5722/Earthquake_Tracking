//Past 7 days, all earthquakes.
var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

function createMap(earthquakes) {

    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var lightMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: "mapbox.light",
        accessToken: API_KEY
    });

    var baseMaps = {
        "Street Map": streetmap,
        "Light Map": lightMap
    };

    var overlayMap = {
        "Earthquakes": earthquakes
    };

    var myMap = L.map("map", {
        center: [32.7157, -117.1611],
        zoom: 3,
        layers: [streetmap, lightMap, earthquakes]
    });

    L.control.layers(baseMaps, overlayMap, {
        collapsed: false
    }).addTo(myMap);
}

function CreateMarkers(response) {



}