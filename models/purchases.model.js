const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const purchaseSchema = new Schema({
    purchaseId: ObjectId,
    courseId: ObjectId,
    userId: ObjectId
});

const purchaseModel = mongoose.model("purchases",purchaseSchema);
module.exports = purchaseSchema;