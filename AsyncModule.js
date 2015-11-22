var async = require("async");

async.series([
	function(callback){
	setTimeout(function() { console.log("Task 1"); callback(null,1); }, 300);
	},
	function(callback){
		setTimeout(function() { console.log("Task 2"); callback(new Error("Problem in Task 2"),2); }, 200);
	},
	function(callback){
		setTimeout(function() { console.log("Task 3"); callback(null,3); }, 100);
	}],function(error,results){
		if (error) {
			console.log(error.toString());
		} else {
			console.log(results);
		}
});

//waterfall

async.waterfall([
	function(callback){
		callback(null,Math.random(),Math.random());		
	},
	function(a,b,callback){
		callback(null,a*a+b*b);
	},
	function(c,callback){
		callback(null,Math.sqrt(c));
	}
],function(error,result){
	console.log(result);
});