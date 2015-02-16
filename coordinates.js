var fs = require('fs');
var http = require('http');

var file = fs.readFileSync('languages.json', 'utf8');
var content = JSON.parse(file);
var arr = [];
var coords = [];
var url = 'http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/'

// create array of unique country names
for (var i = 0; i < content.length; i++) {
	var countries = content[i].properties.country;
	for (var j = 0; j < countries.length; j++) {
		if (arr.indexOf(countries[j]) == -1) {
			arr.push(countries[j]);
		}
	}
}

// replace whitespace with plus signs and add to url
for (var i = 0; i < arr.length; i++) {
	url += (arr[i].replace(/\ /g, '+') + ';');
}

url += '.json?access_token=pk.eyJ1IjoiYXVyb3Jhbm91IiwiYSI6IlJZTGp0dWMifQ.SS0yA6UMyjX7lUyMG02iBw'

// node http get request for country name and center coordinates
http.get(url, function(res) {
	var body = '';
	res.on('data', function(chunk) {
		body += chunk;
	});
	res.on('end', function() {
		var response = JSON.parse(body)
		for (var i = 0; i < response.length; i++) {
			if (response[i]['features'][0]) {
				coords.push(
					{country: response[i]['features'][0]['text'], 
					coordinates: response[i]['features'][0]['center']}
				);
			}
		}
		addCoordinates(coords);
		fs.writeFileSync("languages.json", JSON.stringify(content));
	});
}).on('error', function(error) {
	console.log(error);
});

function addCoordinates(coords) {
	for (var i = 0; i < coords.length; i++) {
		for (var j = 0; j < content.length; j++) {
			if (content[j].properties.country == coords[i].country) {
				content[j].properties.coordinates = coords[i].coordinates;
			}
		}
	}
}