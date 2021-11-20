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

    //Function to determine the color of the marker based on magnitude.
    function markerColor(magnitude) {
        if (magnitude < 1 ) {
            return "#66FF66"
        } else if (magnitude < 2) {
            return "#00FF00"
        } else if (magnitude < 3) {
            return "#99FF33"
        } else if (magnitude < 4) {
            return "#CCFF99"
        } else if (magnitude < 5) {
            return "#FFFF99"
        } else if (magnitude < 6) {
            return "#FFFF33"
        } else if (magnitude < 7) {
            return "#FFB266"
        } else if (magnitude < 8) {
            return "#FF6666"
        } else if (magnitude <9) {
            return "#FF0000"
        }
    }
    //Function to create the markers.
    function quakeMarkers(feature) {
        return {
            fillColor: markerColor(feature.properties.mag),
            radius: markerSize(feature.properties.mag),
            weight: 0.5,
            opacity: 1,
            fillOpacity: 1,
            stroke: true,
            color: "#000000"
        };
    }
    
});



