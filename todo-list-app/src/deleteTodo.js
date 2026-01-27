import fs from "fs";

function deleteTodo(email, index) {
    try {
        const users = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
        const user = users.find(u => u.email === email);

        if (!user || !user.todo[index]) return "Todo not found";

        user.todo.splice(index, 1);
        fs.writeFileSync("todo.json", JSON.stringify(users, null, 2));

        return "Todo deleted";

    } catch (err) {
        console.error(err);
        return "Delete failed";
    }
}

export default deleteTodo;
