// Create a todo item and add it to the user's todo list in todo.json
import fs from "fs";
function createTodo(name, task) {
    try {
        if (!fs.existsSync("todo.json")) return "file not found";

        let data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        let user = data.find(
            (value) => value.name === name
        );

        if (!user) return "user not found";

        user.todo.push({
            task,
            completed: false
        });

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
        return "todo created";

    } catch (error) {
        console.log(error);
        return "create todo failed";
    }
}
export default createTodo;