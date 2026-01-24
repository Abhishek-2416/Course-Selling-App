const {Router} = require("express");
const userRouter = Router();

userRouter.get("/",(req,res) => {
    res.json({
        message: "You have logged in as a User"
    });
});

//Signup
userRouter.post("/signup",(req,res) => {
    res.json({
        message: "You have signed up"
    });
});

//Signin
userRouter.post("/login",(req,res) => {
    res.json({
        message: "You have logged in"
    });
});

//View purchased courses
userRouter.get("/purchases",(req,res) => {
    res.json({
        message: "Here are the courses purchased by you"
    });
});

module.exports = userRouter;