var users = require("./users");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:8001/portalDb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    users.create();
  // we're connected!
  console.log('Mongo: Connected');
});

exports.default = {
    users
};
