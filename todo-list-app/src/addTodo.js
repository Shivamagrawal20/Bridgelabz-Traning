import fs from "fs";

function addTodo(email, task) {
    try {
        const users = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
        const user = users.find(u => u.email === email);

        if (!user) return "User not found";

        user.todo.push({
            task,
            completed: false
        });

        fs.writeFileSync("todo.json", JSON.stringify(users, null, 2));
        return "Todo added";

    } catch (err) {
        console.error(err);
        return "Add todo failed";
    }
}

export default addTodo;
