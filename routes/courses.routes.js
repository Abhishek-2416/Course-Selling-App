const {Router} = require("express");
const courseRouter = Router();
const courseModel = require("../models/courses.model");
const { userAuth } = require("../middlewares/auth.middleware");
const purchaseModel = require("../models/purchases.model");

//Purchase a course
courseRouter.post("/purchase", userAuth, async (req, res) => {
    try {
        const courseId = req.body.courseId;
        const userId = req.userId; 

        // Check course exists
        const courseExists = await courseModel.findById(courseId);
        if (!courseExists) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Check if already purchased
        const alreadyPurchased = await purchaseModel.findOne({ userId, courseId });
        if (alreadyPurchased) {
            return res.status(400).json({ message: "You already purchased this course" });
        }

        // Create purchase
        await purchaseModel.create({ userId, courseId });

        res.json({
            message: `You have purchased the course ${courseExists.courseTitle}`,
            courseId,
            userId
        });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
});

//View Courses
courseRouter.get("/preview",userAuth, async (req,res) => {
    const courses = await courseModel.find({});
    const coursesPreview = courses.map(course => ({
        title: course.courseTitle,
        price: course.price
    }));


    console.log(courses);
    res.json({
        message: "Here are all the courses",
        courses: coursesPreview
    });
});

module.exports = courseRouter;