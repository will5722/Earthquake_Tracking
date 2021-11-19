//Past 7 days, all earthquakes. Create map.
var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


var myMap = L.map("map", {
    center: [32.7157, -117.1611],
    zoom: 3
});

var lightMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: "Map data &copy; <a href=\'https://www.openstreetmap.org/\'>OpenStreetMap</a> contributors, <a href=\'https://creativecommons.org/licenses/by-sa/2.0/\'>CC-BY-SA</a>, Imagery © <a href=\'https://www.mapbox.com/\'>Mapbox</a>",
    id: "mapbox/light-v10",
    accessToken: API_KEY
}).addTo(myMap);




d3.json(earthquakeURL).then((data) => {
    //Function to determine size of markers based on magnitude.
    function markerSize(magnitude) {
        return magnitude * 10;
    }
});



