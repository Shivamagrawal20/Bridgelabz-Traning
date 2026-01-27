import fs from "fs";

function registerUser(name, email, password) {
    try {
        let users = [];

        const newUser = {
            name,
            email,
            password,
            todo: []
        };

        // Check if file exists
        if (fs.existsSync("todo.json")) {
            const data = fs.readFileSync("todo.json", "utf-8");
            users = JSON.parse(data);

            // Check if user already exists
            const isUser = users.some(user => user.email === email);
            if (isUser) {
                return "User already exists";
            }
        }

        // Add new user
        users.push(newUser);

        // Write updated data
        fs.writeFileSync("todo.json", JSON.stringify(users, null, 2));

        return "User registered successfully";

    } catch (error) {
        console.error(error);
        return "Registration failed";
    }
}

export default registerUser;
