const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const adminSchema = new Schema({
    adminId: ObjectId,
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    password: String
});

const adminModel = mongoose.model("admin",adminSchema);
module.exports = adminModel;