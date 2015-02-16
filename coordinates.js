var languages = require('./languages');
var arr = [];
var url = 'http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/'

// create array of unique country names
for (var i = 0; i < languages.length; i++){
	var countries = languages[i].properties.country;
	for (var j = 0; j < countries.length; j++){
		if (arr.indexOf(countries[j]) == -1){
			arr.push(countries[j]);
		}
	}
}

// concatenate url string; replace spaces with plus signs
for (var i = 0; i < arr.length; i++){
	url += (arr[i].replace(/\ /g, '+') + ';');
}

// api call to get country center coordinates
$.ajax({
	type: 'GET',
	url: url + '.json?access_token=pk.eyJ1IjoiYXVyb3Jhbm91IiwiYSI6IlJZTGp0dWMifQ.SS0yA6UMyjX7lUyMG02iBw',
	dataType: 'json',
	success: function(response){
		for (var i = 0; i < response.length; i++){
			console.log(response[i]["features"][0]["text"], response[i]["features"][0]["center"]);
		}
	}
});
