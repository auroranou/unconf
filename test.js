// var fs = require('fs');

$(document).ready(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoiYXVyb3Jhbm91IiwiYSI6IlJZTGp0dWMifQ.SS0yA6UMyjX7lUyMG02iBw';
	var map = L.mapbox.map('map', 'examples.map-20v6611k')
	    .setView([39.8282, -98.5795], 4);

	var newLayer = L.mapbox.featureLayer().addTo(map);

	$.ajax({
		type: 'GET',
		url: 'test.json',
		dataType: 'json',
		success: function(response){
			console.log(response);
		}
	});

	// var file = fs.readFileSync(__dirname + 'test.json', 'utf8');
	// var geoJson = JSON.parse(file);
	// console.log(geoJson)

	// newLayer.setGeoJSON(geoJson);

});