import fs from "fs";

function markComplete(email, index) {
    try {
        const users = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
        const user = users.find(u => u.email === email);

        if (!user || !user.todo[index]) return "Todo not found";

        user.todo[index].completed = true;
        fs.writeFileSync("todo.json", JSON.stringify(users, null, 2));

        return "Todo marked complete";

    } catch (err) {
        console.error(err);
        return "Update failed";
    }
}

export default markComplete;
