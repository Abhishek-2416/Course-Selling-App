const {Router} = require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminModel = require("../models/admin.model");
const UserModel = require("../models/user.model");
const auth = require("../middlewares/auth.middleware");

//Test Route
adminRouter.get("/",(req,res) => {
    res.json({
        message: "You have logged in as a User"
    });
});

//Signup
adminRouter.post("/signup",async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await adminModel.findOne({
        email: email
    });

    if(userExists){
        res.status(403).json({message: "The user already exists with the email, please use a different email address or signin with your existing account"});
    }

    // We need to include the checks for the schema via zod
    const hashedPassword = await bcrypt.hash(password,5);

    await adminModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });

    res.json({
        message: "You have signed up as Admin"
    });
});

//Signin
adminRouter.post("/signin",async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const adminExists = await adminModel.findOne({
        email: email
    });

    if(!adminExists){
        res.status(403).json({message: "The email is not registered please signup"});
    };

    const verifyPassword = await bcrypt.compare(password, adminExists.password);
    
    if(!verifyPassword){
        res.status(403).json({message: "The password you have entered is incorrect. Please make sure to recheck the password or reset the password"});
    }else{
        const token = jwt.sign({userId: adminExists._id},process.env.JWT_SECRET);
        res.json({
            message: `You have logged in as Admin and here is your token: ${token}`
        });
    }
});

//Update courses
adminRouter.put("/update/:courseId",auth,(req,res) => {
    res.json({
        message: `Updated the course with the course Id`
    });
});

// Add Courses
adminRouter.post("/addCourse",auth,(req,res) => {
    res.json({
        message: "Added a course successfully"
    });
});

//Get all courses
adminRouter.get("/course/bulk",auth, (req,res) => {
    res.json({
        message: "Courses endpoint for admin"
    });
});

module.exports = adminRouter;