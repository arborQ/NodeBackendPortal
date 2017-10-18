import * as hapi from "hapi";
import controllers from "../controllers";
import * as config from "./config";

const server = new hapi.Server();

server.connection({
    host: config.serverHost,
    port: config.serverPort,
});

// tslint:disable-next-line:forin
for (const index in controllers) {
    const controller = new controllers[index]();
    server.route({
        handler: (request, reply) => {
            return reply(controller.handler(request));
        },
        method: controller.method,
        path: `/api/${index}${controller.path}`,
    });
}

server.start((err) => {
    console.log("Hapi: server running at:", server.info.uri);
});
