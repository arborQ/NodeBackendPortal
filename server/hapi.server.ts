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
    const controllerClass = controllers[index];
    const controller = new controllerClass();

    server.route({
        config: {
            handler: (request, reply) => {
                return reply(controller.handler(request));
            },
            pre: (controllerClass.PreActions || []).map((cc: Utils.IPreAction) => {
                return {
                    method: (request, reply) => { cc.action().then(reply); },
                };
            }),
        },
        method: controller.method,
        path: `/api/${index}${controller.path}`,
    });
}

server.start((err) => {
    console.log("Hapi: server running at:", server.info.uri);
});
