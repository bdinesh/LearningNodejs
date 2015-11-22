// setInterval(function() {
// 	console.log("hello");		
// }, 1000);
// 
// setInterval(function(){
// 	console.log("world");
// },1000);

var fs = require("fs");

fs.readFile("index.js", "UTF8", function(error,data){
	if (error) {
		throw error;
	}
	else{
		console.log(data);
	}	
});

console.log("Reading file...");
