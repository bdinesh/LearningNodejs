const httpServer = require("./HttpServer");
const router = require("./router");

httpServer.start(router.route);