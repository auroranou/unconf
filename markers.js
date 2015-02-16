var fs = require("fs");

var file = fs.readFileSync("languages.json", "utf8");
var content = JSON.parse(file);

var markerProperties = content.map(function(lang){
	if (lang.properties.coordinates) {
		return {
			"type": "Feature", 
			"geometry": {
				"type": "Point",
				"coordinates": lang.properties.coordinates
			},
			"properties": {
				"title": lang.langName,
				"description": "Creator(s): " + lang.properties.creator,
	      "marker-size": "medium",
	      "marker-color": "#009BFB",
	      "marker-symbol": "star"
			}
		}
	}
});

fs.writeFileSync("data.json", JSON.stringify(markerProperties));