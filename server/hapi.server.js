var hapi = require("hapi");
var controllers = require("../controllers").default;
const server = new hapi.Server();



server.connection({
    host: "localhost",
    port: 8000
});

for(const index in controllers) {
    const controller = controllers[index];
    
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