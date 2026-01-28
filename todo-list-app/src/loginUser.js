import fs from "fs";

function loginUser(name, password) {
    try {
        if (!fs.existsSync("todo.json")) return false;

        let data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        let isUser = data.find(
            (value) =>
                value.name === name &&
                value.password === password
        );

        if (isUser) {
            return isUser;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return "login error";
    }
}

export default loginUser;
