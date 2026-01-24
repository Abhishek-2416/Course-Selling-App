const express = require("express");
const dotenv = require("dotenv");

const userRouter = require("./routes/user.routes");
const courseRouter = require("./routes/courses.routes");
const adminRouter = require("./routes/admin.routes");

const app = express();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

app.listen(PORT,() => {
    console.log(`Server is running on the PORT:${PORT}`);
});