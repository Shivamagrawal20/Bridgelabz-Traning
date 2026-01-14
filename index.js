// 1 . Hello World
console.log("Nodejs Backend Started");

// 2. Varialbles
let name = "Aman";     //string variable
let age = 22;          //number variable
const country="india"; //constant variable
let isstudent = true;  //boolean variable

console.log(name);
console.log(age);
console.log(country);
console.log(isstudent);

// 3. Data Types
let score;              //undefined variable
let data = null;        //null variable

console.log(score);
console.log(data);

// Object
let user = {
    name : "Aman",
    age : 22,
    email : "rahul@gmail.com",
};
console.log(user);
console.log(user.name);

// Aray
let fruits = ["apple", "banana", "mango", "grapes"];
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(fruits);
console.log(fruits[2]);

// 4. Operators
let a = 10;
let b = 5;
// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// condition (if else)
let loginAge = 18;
if (loginAge >= 18) {
    console.log("User can login");
} else {
    console.log("User cannot login");
}

// loop (for loop)
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}


// Simple Backend Login
const admin = {
    username: "admin",
    password: "admin123"
}



