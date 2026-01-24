const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const courseSchema = new Schema({
    courseTitle: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId 
});

const courseModel = mongoose.model("courses",courseSchema);
module.exports = courseModel;
