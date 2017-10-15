import * as hapi from "hapi";
import controllers from "../controllers";

const server = new hapi.Server();

server.connection({
    host: "localhost",
    port: 8011,
});

// tslint:disable-next-line:forin
for (const index in controllers) {
    const controller = controllers[index];
    server.route({
        handler: (request, reply) => {
            console.log("in handler", controller.handler);
            return reply(controller.handler(request));
            // new Promise(controller.handler(request)).then((data) => {
            //     reply(data);
            // });
        },
        method: controller.method,
        path: `/api/${index}${controller.path}`,
    });
}

server.start((err) => {
    console.log("Hapi: server running at:", server.info.uri);
});
