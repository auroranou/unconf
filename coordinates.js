var fs = require('fs');
var http = require('http');

var file = fs.readFileSync('languages.json', 'utf8');
var content = JSON.parse(file);
var arr = [];
var url = 'http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/'

// create array of unique country names
for (var i = 0; i < content.length; i++){
	var countries = content[i].properties.country;
	for (var j = 0; j < countries.length; j++){
		if (arr.indexOf(countries[j]) == -1){
			arr.push(countries[j]);
		}
	}
}

// replace whitespace with plus signs
for (var i = 0; i < arr.length; i++){
	url += (arr[i].replace(/\ /g, '+') + ';');
}

url = url + '.json?access_token=pk.eyJ1IjoiYXVyb3Jhbm91IiwiYSI6IlJZTGp0dWMifQ.SS0yA6UMyjX7lUyMG02iBw'

// node http get request for country name and center coordinates
http.get(url, function(res){
	var body = '';
	res.on('data', function(chunk) {
		body += chunk;
	});

	res.on('end', function(){
		var response = JSON.parse(body)
		for (var i = 0; i < response.length; i++){
			console.log(response[i]['features'][0]['text'], response[i]['features'][0]['center']);
		}
	});
}).on('error', function(error){
	console.log(error);
});