var httpServer = require("./HttpServer");
var router = require("./router");

httpServer.start(router.route);