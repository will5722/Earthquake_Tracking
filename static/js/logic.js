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
        return magnitude * 5;
    }

    //Function to determine the color of the marker based on magnitude.
    function markerColor(depth) {
        if (depth < 10 ) {
            return "#66FF66"
        } else if (depth < 20) {
            return "#00FF00"
        } else if (depth < 30) {
            return "#99FF33"
        } else if (depth < 40) {
            return "#CCFF99"
        } else if (depth < 50) {
            return "#FFFF99"
        } else if (depth < 60) {
            return "#FFFF33"
        } else if (depth < 70) {
            return "#FFB266"
        } else if (depth < 80) {
            return "#FF6666"
        } else if (depth < 90) {
            return "#FF0000"
        } else if (depth < 100) {
            return "#B22222"
        } else {
            return "#8B0000"
        }
    }
    //Function to create the markers.
    function quakeMarkers(feature) {
        return {
            fillColor: markerColor(feature.geometry.coordinates[2]),
            radius: markerSize(feature.properties.mag),
            weight: 0.5,
            opacity: 1,
            fillOpacity: 1,
            stroke: true,
            color: "#000000"
        };
    }
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: quakeMarkers,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);
        }
    }).addTo(myMap);

    //Add legend to map. 
    var legend = L.control({
        position: "bottomright"
    });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var depthList = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        var colors = ["#66FF66", "#00FF00", "#99FF33", "#CCFF99", "#FFFF99", "#FFFF33", "#FFB266", "#FF6666", "#FF0000", "#B22222"];
        //var labels = [];

        for (var i = 0; i < depthList.length; i++) {
            div.innerHTML += "<li style='background-color: " + markerColor(depthList[i]) + "'></i> " + depthList[i] + 
            (depthList[i + 1] ? "&ndash;" + depthList[i + 1] + '<br>' : '+');
        } return div;
    };
    legend.addTo(myMap);
});



