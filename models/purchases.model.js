const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const purchaseSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: "courses"}
});

const purchaseModel = mongoose.model("purchases",purchaseSchema);
module.exports = purchaseModel;