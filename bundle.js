(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var languages = require('./languages');
var arr = [];
var url = 'http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/'

for (var i = 0; i < languages.length; i++){
	var countries = languages[i].properties.country;
	for (var j = 0; j < countries.length; j++){
		if (arr.indexOf(countries[j]) == -1){
			arr.push(countries[j]);
		}
	}
}

for (var i = 0; i < arr.length; i++){
	url += (arr[i].replace(/\ /g, '+') + ';');
}

console.log(url)

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

},{"./languages":2}],2:[function(require,module,exports){
module.exports = [ 
  { "langName": "Java",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["James Gosling"], 
    	"country": ["United States"], 
    	"year": "1995" 
    } 
  },
  { "langName": "JavaScript",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Brendan Eich"], 
    	"country": ["United States"], 
    	"year": "1995" 
    } 
  },
  { "langName": "PHP",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Rasmus Lerdorf"], 
    	"country": ["Greenland"], 
    	"year": "1995" 
    }
  },
  { "langName": "Python",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Guido van Rossum"], 
    	"country": ["Netherlands"], 
    	"year": "1991" 
    } 
  },
  { "langName": "C++",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Bjarne Stroustrup"], 
    	"country": ["Denmark"], 
    	"year": "1983" 
    } 
  },
  { "langName": "C#",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Microsoft"], 
    	"country": ["United States"], 
    	"year": "2000" 
    } 
  },
  { "langName": "Ruby",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Yukihiro Matsumoto"], 
    	"country": ["Japan"], 
    	"year": "1995" 
    } 
  },
  { "langName": "Objective-C",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Brad Cox", "Tom Love"], 
    	"country": ["United States"], 
    	"year": "1983" 
    } 
  },
  { "langName": "C",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Dennis Ritchie"], 
    	"country": ["United States"], 
    	"year": "1972" 
    } 
  },
  { "langName": "Perl",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Larry Wall"], 
    	"country": ["United States"], 
    	"year": "1987" 
    } 
  },
  { "langName": "Shell",
    "properties": { 
    	"humanLang": [], 
    	"creator": [], 
    	"country": [], 
    	"year": "" 
    } 
  },
  { "langName": "Scala",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Martin Odersky"], 
    	"country": ["Switzerland"], 
    	"year": "2003" 
    } 
  },
  { "langName": "Haskell",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Simon Peyton Jones et al"], 
    	"country": ["United States", "Sweden", "Netherlands", "United Kingdom"], 
    	"year": "1990" 
    } 
  },
  { "langName": "R",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Ross Ihaka", "Robert Gentleman]"], 
    	"country": ["New Zealand"], 
    	"year": "1993" 
    } 
  },
  { "langName": "Matlab",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Cleve Moler"], 
    	"country": ["United States"], 
    	"year": "1978" 
    } 
  },
  { "langName": "ActionScript",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Gary Grossman"], 
    	"country": ["United States"], 
    	"year": "1998" 
    } 
  },
  { "langName": "Groovy",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["James Strachan"], 
    	"country": ["England"], 
    	"year": "2003" 
    } 
  },
  { "langName": "Clojure",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Rich Hickey"], 
    	"country": ["United States"], 
    	"year": "2007" 
    } 
  },
  { "langName": "Lua",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Roberto Ierusalimschy", "Waldemar Celes", "Luiz Henrique de Figueiredo"], 
    	"country": ["Brazil"], 
    	"year": "1993" 
    } 
  },
  { "langName": "Erlang",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Joe Armstrong", "Robert Virdin]g", "Mike Williams"], 
    	"country": ["Sweden"], 
    	"year": "1986" 
    } 
  },
  { "langName": "Go",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Robert Griesemer", "Rob Pike", "Ken Thompson"], 
    	"country": ["United States"], 
    	"year": "2009" 
    } 
  },
  { "langName": "CoffeeScript",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Jeremy Ashkenas"], 
    	"country": ["United States"], 
    	"year": "2009" 
    } 
  },
  { "langName": "Visual Basic",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Microsoft"], 
    	"country": ["United States"], 
    	"year": "1991" 
    } 
  },
  { "langName": "Embarcadero Delphi",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Borland"], 
    	"country": ["United States"], 
    	"year": "1995" 
    } 
  },
  { "langName": "Powershell",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Microsoft"], 
    	"country": ["United States"], 
    	"year": "2006" 
    } 
  },
  { "langName": "CFML",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Jeremy Allaire"], 
    	"country": ["United States"], 
    	"year": "1995" 
    } 
  },
  { "langName": "Scheme",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Guy L. Steele", "Gerald Ja]y Sussman"], 
    	"country": ["United States"], 
    	"year": "1975" 
    } 
  },
  { "langName": "Prolog",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Alain Colmerauer"], 
    	"country": ["France"], 
    	"year": "1972" 
    } 
  },
  { "langName": "Arduino",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Arduino"], 
    	"country": ["Italy"], 
    	"year": "2005" 
    } 
  },
  { "langName": "Tcl",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["John Ousterhout"], 
    	"country": ["United States"], 
    	"year": "1988" 
    } 
  },
  { "langName": "FORTRAN",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["John Backus"], 
    	"country": ["United States"], 
    	"year": "1957" 
    } 
  },
  { "langName": "Dart",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Lars Bak", "Kasper Lund"], 
    	"country": ["Denmark"], 
    	"year": "2013" 
    } 
  },
  { "langName": "D",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Walter Bright", "Andrei Alexandrescu"], 
    	"country": ["United States", "Romania"], 
    	"year": "2001" 
    } 
  },
  { "langName": "TypeScript",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Microsoft"], 
    	"country": ["United States"], 
    	"year": "2012" 
    } 
  },
  { "langName": "Processing",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Casey Reas", "Benjamin Fry"], 
    	"country": ["United States"], 
    	"year": "2001" 
    } 
  },
  { "langName": "Racket",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["PLT Inc."], 
    	"country": ["United States"], 
    	"year": "1994" 
    } 
  },
  { "langName": "Smalltalk",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Alan Kay", "Dan Ingalls", "Adele Goldberg"],
    	"country": ["United States"], 
    	"year": "1972" 
    } 
  },
  { "langName": "HaXe",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Nicolas Cannasse"], 
    	"country": ["France"], 
    	"year": "2005" 
    } 
  },
  { "langName": "Vala",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Jürg Billeter", "Raffaele Sandrini"], 
    	"country": ["Switzerland"], 
    	"year": "2006" 
    } 
  },
  { "langName": "Verilog",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Prabhu Goel", "Phil Moorby"], 
    	"country": ["United States", "United Kingdom"], 
    	"year": "1984" 
    } 
  },
  { "langName": "AutoHotkey",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Chris Mallet", "Steve Gray"], 
    	"country": ["United States"], 
    	"year": "2003" 
    } 
  },
  { "langName": "Pascal",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Niklaus Wirth"], 
    	"country": ["Switzerland"], 
    	"year": "1970" 
    } 
  },
  { "langName": "Standard ML",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": [], 
    	"country": [], 
    	"year": "" 
    } 
  },
  { "langName": "Ada",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Jean Ichbiah"], 
    	"country": ["France"], 
    	"year": "1980" 
    } 
  },
  { "langName": "OpenEdge ABL",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Progress Software Corporation"], 
    	"country": ["United States"], 
    	"year": "1984" 
    } 
  },
  { "langName": "Rust",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Graydon Hoare"], 
    	"country": ["United States"], 
    	"year": "2012" 
    } 
  },
  { "langName": "Coq",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Thierry Coquand, Gérard Huet, et al"],
    	"country": ["France"], 
    	"year": "1984" 
    } 
  },
  { "langName": "XQuery",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["W3C"], 
    	"country": ["United States"], 
    	"year": "2007" 
    } 
  },
  { "langName": "AppleScript",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Apple, Inc."], 
    	"country": ["United States"], 
    	"year": "1993" 
    } 
  },
  { "langName": "Scilab",
    "properties": { 
    	"humanLang": [["English"], "German", "Spanish", "French", "Italian", "Japanese", "Portuguese", "Russian", "Ukrainian", "Chinese", "Czech", "Polish"], 
    	"creator": ["Scilab Enterprises"], 
    	"country": ["France"], 
    	"year": "1990" 
    } 
  },
  { "langName": "Julia",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Jeff Bezanson", "Stefan Karpinski", "Viral B. Shah", "Alan Edelman"], 
    	"country": ["United States"], 
    	"year": "2012" 
    } 
  },
  { "langName": "Elixir",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["José Valim"], 
    	"country": ["Brazil"], 
    	"year": "2012" 
    } 
  },
  { "langName": "Common Lisp",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Scott Fahlman", "Richard P. Ga]briel", "Dave Moon", "Guy Steele", "Dan Weinreb"], 
    	"country": ["United States"], 
    	"year": "1984" 
    } 
  },
  { "langName": "Io",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Steve Dekorte"], 
    	"country": ["United States"], 
    	"year": "2002" 
    } 
  },
  { "langName": "Awk",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Alfred Aho", "Peter Weinberger", "Brian Kernighan"], 
    	"country": ["Canada", "United States"], 
    	"year": "1977" 
    } 
  },
  { "langName": "Objective-J",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Cappucino Core developers"], 
    	"country": [], 
    	"year": "2008" 
    } 
  },
  { "langName": "Nemerle",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Kamil Skalski", "Michał Moskal", "Leszek Pacholski", "Paweł Olszta"], 
    	"country": ["Poland"], 
    	"year": "2003" 
    } 
  },
  { "langName": "Lasso",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Kyle Jessup"], 
    	"country": ["United States"], 
    	"year": "1995" 
    } 
  },
  { "langName": "Eiffel",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Bertrand Meyer"], 
    	"country": ["France"], 
    	"year": "1986" 
    } 
  },
  { "langName": "SuperCollider",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["James McCartney et al"], 
    	"country": ["United States"], 
    	"year": "1996" 
    } 
  },
  { "langName": "Oxygene",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["RemObjects Software"], 
    	"country": ["United States"], 
    	"year": "" 
    } 
  },
  { "langName": "Pure Data",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Miller Puckette"], 
    	"country": ["United States"], 
    	"year": "1996" 
    } 
    },
  { "langName": "Kotlin",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["JetBrains"], 
    	"country": ["Russia"], 
    	"year": "2011" 
    } 
  },
  { "langName": "Xtend",
    "properties": { 
    	"humanLang": [], 
    	"creator": ["Sven Efftinge", "Sebastian Zam]ekow"], 
    	"country": ["Germany"], 
    	"year": "2011" 
    } 
  },
  { "langName": "IDL",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["David Stern"], 
    	"country": ["United States"], 
    	"year": "1977" 
    } 
  },
  { "langName": "Factor",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Slava Pestov"], 
    	"country": [], 
    	"year": "2003" 
    } 
  },
  { "langName": "Boo",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Rodrigo B. De Oliveira"], 
    	"country": ["Brazil"], 
    	"year": "2003" 
    } 
  },
  { "langName": "Ceylon",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Gavin King", "Red Hat"], 
    	"country": ["Australia"], 
    	"year": "2011" 
    } 
  },
  { "langName": "F#",
    "properties": { 
      "humanLang": ["English"], 
      "creator": ["Don Syme"], 
      "country": ["Australia"], 
      "year": "2005" 
    } 
  },
  { "langName": "M",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Neil Pappalardo"], 
    	"country": ["United States"], 
    	"year": "1996" 
    } 
  },
  { "langName": "Gosu",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Guidewire Software"], 
    	"country": [], 
    	"year": "2010" 
    } 
  },
  { "langName": "Dylan",
    "properties": { 
    	"humanLang": ["English"], 
    	"creator": ["Apple Computer", "Harlequin", "Carnegie Mellon University"], 
    	"country": ["United States"], 
    	"year": "1992" 
    } 
  }
]

},{}]},{},[1]);