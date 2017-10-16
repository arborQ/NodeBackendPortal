import * as express from "express";
import controllers from "../controllers";

const app = express();

// tslint:disable-next-line:forin
for (const index in controllers) {
  const controller = controllers[index];
  app.get(`/api/${index}${controller.path}`, (request, reply) => {
    controller.handler(request).then((data) => {
      reply.send(data);
    });
  });
}

app.listen(8000, () => {
  console.log("Express: server running at: 8000");
});
