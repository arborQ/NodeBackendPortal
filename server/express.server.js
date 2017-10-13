const express = require('express');
var controllers = require("../controllers").default;

const app = express();

for(const index in controllers) {
  const controller = controllers[index];
  app.get(`/api/${index}${controller.path}`, function (request, reply) {
    const response = controller.handler(request);
    reply.send(response);
  })
}

app.listen(8000, function () {
  console.log('Express: server running at: 8000');
})    