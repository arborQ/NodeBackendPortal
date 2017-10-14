var users = require("./users");
var products = require("./products");
var config = require("../server/config.json");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(`mongodb://localhost:${config.databasePort}/${config.databaseName}`);

var databaseSchema = {
    users, products
};

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  
  for(var tableName in databaseSchema) {
    const mongoSchema = new Schema(databaseSchema[tableName]);
    mongoose.model(tableName, mongoSchema);
    console.log(`${tableName}: collection created!`);
  }

  console.log('Mongo: Connected');
});

exports.default = {
  users
};
