import * as express from "express";
import controllers from "../controllers";
import * as config from "./config";

const app = express();

// tslint:disable-next-line:forin
for (const index in controllers) {
  const controller = new controllers[index]();

  app.get(`/api/${index}${controller.path}`, (request, reply) => {
    controller.handler(request).then((data) => {
      reply.send(data);
    });
  });

}

app.listen(config.serverPort, () => {
  console.log(`Express: server running at: ${config.serverPort}`);
});
