var hapi = require("hapi");
var config = require("./config.json");
var controllers = require("../controllers").default;
var server = new hapi.Server();

server.connection({
    host: "localhost",
    port: config.serverPort
});

for(var index in controllers) {
    var controller = controllers[index];
    
    server.route({
        method: controller.method, 
        path: `/api/${index}${controller.path}`,
        handler: (request, reply) => {
            const response = controller.handler(request);
            return reply(response);
        }
    });
}



server.start((err) => {
    console.log('Hapi: server running at:', server.info.uri);
});