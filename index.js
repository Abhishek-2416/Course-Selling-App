const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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

async function main() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
        console.error("MongoDB error", err);
        process.exit(1);
    });

    app.listen(PORT,() => {
        console.log(`Server is running on the PORT:${PORT}`);
    });

};

main();