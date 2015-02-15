var fs = require("fs");

var file = fs.readFileSync("languages.json", "utf8");
var content = JSON.parse(file);

var markerProperties = content.map(function(lang){
	return {
		"type": "Feature", 
		"geometry": {
			"type": "Point",
			"coordinates": [-98.5795, 39.8282]
		},
		"properties": {
			"title": lang["langName"],
			"description": "Creator(s): " + lang["properties"]["creator"],
      "marker-size": "medium",
      "marker-color": "#009BFB",
      "marker-symbol": "star"
		}
	}
});

fs.writeFileSync("test.json", JSON.stringify(markerProperties));