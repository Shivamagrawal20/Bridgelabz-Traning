import registerUser from "./src/registerUser.js";
import loginUser from "./src/loginUser.js";
import addTodo from "./src/addTodo.js";
import deleteTodo from "./src/deleteTodo.js";
import markComplete from "./src/markComplete.js";

console.log(registerUser("Shiv", "shiv@gmail.com", "123"));
console.log(loginUser("shiv@gmail.com", "123"));
console.log(addTodo("shiv@gmail.com", "Learn Node.js"));
console.log(markComplete("shiv@gmail.com", 0));
console.log(deleteTodo("shiv@gmail.com", 0));
