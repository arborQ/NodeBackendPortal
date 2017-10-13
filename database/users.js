var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = {
    firstName: String,
    lastName: String
};

exports.create = () =>{
    const userMongoSchema = new Schema(userSchema);
    mongoose.model("users", userMongoSchema);
    console.log("Collection created!");
};
