var fs = require("fs");
var domain = require("domain")
var d1 = domain.create();

d1.run(function () {
	fs.readFile("","utf8",function(error,data){
		if (error) {
			throw error;
		}
		
		console.log(data);
		domain.dispose();
	});
});

d1.on("error",function(){
	console.log("Exception handled in domain.")
});

d1 = domain.create();
var d2 = domain.create();

d1.run(function(){
	d2.add(setTimeout(function(){
		throw new Error("test error");
	},1000));
});

d2.on("error",function(error){
	console.log("caught in d2");
});

d1.on("error",function(error){
	console.log("caught in d1");
});

console.log(d1.members);