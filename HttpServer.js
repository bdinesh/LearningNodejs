const http = require("http");
const url = require("url");

exports.start = function(route){

	function onRequest(request, response){
		const pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + " received.");
		
		route(pathName);
		
		response.writeHead(200, {"content-type":"text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
};


