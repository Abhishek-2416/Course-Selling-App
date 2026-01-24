const {Router} = require("express");
const courseRouter = Router();
const courseModel = require("../models/courses.model");

//Purchase a course
courseRouter.post("/purchase",(req,res) => {
    // We are not working for the payment directly
    res.json({
        message: "You are purchasing the course"
    });
});

//View Courses
courseRouter.get("/preview",(req,res) => {
    res.json({
        message: "Here are all the courses"
    });
});

module.exports = courseRouter;