import express from "express";
import createUser from "./src/createUser.js";
import login from "./src/login.js";
import createMovie from "./src/createMovie.js";
import bookMovie from "./src/bookMovie.js";


const app = express();
app.use(express.json());
app.post("/register", createUser);
app.post("/login", login);
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.listen(3000, () => {
    console.log("connected");
});