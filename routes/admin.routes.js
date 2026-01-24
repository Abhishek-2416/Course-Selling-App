const {Router} = require("express");
const adminRouter = Router();

//Test Route
adminRouter.get("/",(req,res) => {
    res.json({
        message: "You have logged in as a User"
    });
});

//Signup
adminRouter.post("/signup",(req,res) => {
    res.json({
        message: "You have signed up as Admin"
    });
});

//Signin
adminRouter.post("/login",(req,res) => {
    res.json({
        message: "You have logged in as Admin"
    });
});

//Update courses
adminRouter.put("/update/:courseId",(req,res) => {
    res.json({
        message: `Updated the course with the course Id`
    });
});

// Add Courses
adminRouter.post("/addCourse",(req,res) => {
    res.json({
        message: "Added a course successfully"
    });
});

//Get all courses
adminRouter.get("/course/bulk", (req,res) => {
    res.json({
        message: "Courses endpoint for admin"
    });
});

module.exports = adminRouter;