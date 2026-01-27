import fs from "fs";

function loginUser(email, password) {
    try {
        if (!fs.existsSync("todo.json")) {
            return false;
        }

        const data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        const user = data.find(
            value => value.email === email && value.password === password
        );

        return user || false;

    } catch (err) {
        console.error(err);
        return "Login error";
    }
}

export default loginUser;
