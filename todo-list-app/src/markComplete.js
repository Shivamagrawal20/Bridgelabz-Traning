import fs from "fs";

function markComplete(name, index) {
    try {
        if (!fs.existsSync("todo.json")) return "file not found";

        let data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        let user = data.find(
            (value) => value.name === name
        );

        if (!user || !user.todo[index]) return "todo not found";

        user.todo[index].completed = true;

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
        return "todo marked complete";

    } catch (error) {
        console.log(error);
        return "update failed";
    }
}

export default markComplete;
