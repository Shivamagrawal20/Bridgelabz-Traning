import jwt from "jsonwebtoken";
import { createuser, login, updateUser } from "../model/usermodel/user.js";

export function register(req, res) {
    let { name, email, password } = req.body;

    let result = createuser(name, email, password);

    res.json({
        message: "User registered successfully",
        user: {
            name: result.name,
            email: result.email
        }
    });
}

export function userlogin(req, res) {
    let { email, password } = req.body;

    let result = login(email, password);

    if (!result) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: result.id, email: result.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token,
        user: {
            name: result.name,
            email: result.email
        }
    });
}


export function userupdate(req, res) {
    let { id, name, email, password } = req.body;

    let result = updateUser(id, password, email, name);

    res.send(result);
}