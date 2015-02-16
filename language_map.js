$(document).ready(function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoiYXVyb3Jhbm91IiwiYSI6IlJZTGp0dWMifQ.SS0yA6UMyjX7lUyMG02iBw';

	var map = L.mapbox.map('map')
    .setView([39.8282, -98.5795], 2)
    .addLayer(L.mapbox.tileLayer('examples.map-20v6611k'));

	var featureLayer = L.mapbox.featureLayer().addTo(map);
	var geoJsonLayer = L.geoJson(geojson);

  featureLayer.on('ready', function() {
	  var clusterGroup = L.MarkerClusterGroup();
	  clusterGroup.addLayer(geoJsonLayer);
	  map.addLayer(clusterGroup);
  });
});