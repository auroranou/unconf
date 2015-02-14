// create json skeleton for language list

var fs = require('fs');

var arr = [
	"Java",
	"JavaScript",
	"PHP",
	"Python",
	"C++",
	"C#",
	"Ruby",
	"Objective-C",
	"C",
	"Perl",
	"Shell",
	"Scala",
	"Haskell",
	"R",
	"Matlab",
	"ActionScript",
	"Groovy",
	"Clojure",
	"Lua",
	"Erlang",
	"Go",
	"CoffeeScript",
	"Visual Basic",
	"Delphi",
	"Powershell",
	"Assembly",
	"Emacs Lisp",
	"ASP",
	"ColdFusion",
	"Scheme",
	"Prolog",
	"Arduino",
	"Tcl",
	"FORTRAN",
	"Dart",
	"D",
	"Puppet",
	"TypeScript",
	"Processing",
	"Racket",
	"Smalltalk",
	"HaXe",
	"Vala",
	"Verilog",
	"Apex",
	"AutoHotkey",
	"Pascal",
	"TeX",
	"Standard ML",
	"Ada",
	"OpenEdge ABL",
	"Rust",
	"Coq",
	"DOT",
	"XQuery",
	"AppleScript",
	"Scilab",
	"Julia",
	"Elixir",
	"Logos",
	"Common Lisp",
	"Io",
	"Awk",
	"Object-J",
	"Nemerle",
	"Lasso",
	"Eiffel",
	"SuperCollider",
	"Oxygene",
	"nesC",
	"Pure Data",
	"Parrot",
	"LiveScript",
	"Kotlin",
	"DCPU-16 ASM",
	"Xtend",
	"IDL",
	"Factor",
	"Boo",
	"Ceylon",
	"M",
	"Gosu",
	"Dylan",
	"Nimrod",
	"XProc",
	"ooc"
]

var newArr = arr.map(function(lang) {
	return { langName: lang, 
		properties: { 
			humanLang: "",
			creator: "",
			country: "",
			year: ""
		} 
	}
});

console.log(newArr);

// fs.writeFileSync("languages.json", JSON.stringify(newArr));