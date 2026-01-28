import fs from "fs";

function deleteTodo(name) {
    try {
        let isFile = fs.existsSync("todo.json");
        if (!isFile) return "file does not exist";

        let data = JSON.parse(
            fs.readFileSync("todo.json", "utf-8")
        );

        let isUser = data.some(
            (value) => value.name === name
        );
        if (!isUser) return "user not found";

        let updatedData = data.filter(
            (value) => value.name !== name
        );

        fs.writeFileSync("todo.json", JSON.stringify(updatedData, null, 2));
        return "user deleted";

    } catch (error) {
        console.log(error);
        return "delete failed";
    }
}

export default deleteTodo;
