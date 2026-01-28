import fs from "fs";

function registerUser(id, name, email, password) {
    try {
        let data = [];

        if (fs.existsSync("todo.json")) {
            data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

            let isUser = data.some(
                (value) => value.email === email
            );
            if (isUser) return "user already exists";
        }

        data.push({id,name,email,password,todo: []});

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
        return "user registered";

    } catch (error) {
        console.log(error);
        return "registration failed";
    }
}

export default registerUser;
