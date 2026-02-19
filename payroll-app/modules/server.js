import express from "express";
import dotenv from "dotenv";
import userRouter from "../src/model/routers/users/userRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
