var fs = require("fs");

var file = fs.readFileSync("languages.json", "utf8");
var content = JSON.parse(file);

var markerProperties = content.map(function(lang){
	return {
		"type": "Feature", 
		"geometry": {
			"type": "Point",
			"coordinates": countryCoord
		},
		"properties": {
			"title": lang.langName,
			"description": "Creator(s): " + lang.properties.creator,
      "marker-size": "medium",
      "marker-color": "#009BFB",
      "marker-symbol": "star"
		}
	}
});

fs.writeFileSync("test.json", JSON.stringify(markerProperties));

for (i in languages) {
	// var coord = geocode against languages[i].country
	return markerProperties.properties = // geocoding response 
}