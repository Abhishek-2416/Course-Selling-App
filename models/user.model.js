const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;