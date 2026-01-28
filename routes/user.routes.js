const {Router} = require("express");
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user.model");
const purchaseModel = require("../models/purchases.model");

const {userAuth} = require("../middlewares/auth.middleware");

userRouter.get("/",(req,res) => {
    res.json({
        message: "You have logged in as a User"
    });
});

//Signup
userRouter.post("/signup",async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await UserModel.findOne({
        email: email
    });

    if(userExists){
        return res.status(403).json({message: "The user already exists with the email, please use a different email address or signin with your existing account"});
    }
    
    const hashedPassword = await bcrypt.hash(password,5);

    await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });

    res.json({
        message: "You have signed up as User"
    });
});

//Signin
userRouter.post("/signin",async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userExists = await UserModel.findOne({
        email: email
    });

    if(!userExists){
        return res.status(403).json({message: "The email is not registered please signup"});
    }
    const verifyPassword = await bcrypt.compare(password,userExists.password);
    
    if(!verifyPassword){
        return res.status(403).json({message: "The password you have entered is incorrect. Please make sure to recheck the password or reset the password"});
    }else{
        const token = jwt.sign({id: userExists._id},process.env.USER_JWT_SECRET);
        res.json({
            message: `You have logged in as User and here is your token: ${token}`
        });
    }
});

//View purchased courses
userRouter.get("/purchases",userAuth,(req,res) => {
    res.json({
        message: "Here are the courses purchased by you"
    });
});

module.exports = userRouter;