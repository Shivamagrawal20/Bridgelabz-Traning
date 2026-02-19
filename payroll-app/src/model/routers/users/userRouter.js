import express from "express";
import { register, userlogin, userupdate } 
from "../../../controller/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", userlogin);
router.put("/update", userupdate);

export default router;
