let s1="hello world";
let s2='hello world';
let s3="node.js is fun";

console.log(s1);
console.log(s2);
console.log(s3);

//String Methods
let text = "JavaScript";
console.log("Length:", text.length);

//Access Characters (Index)
let word = "Node";
console.log("First Character:", word[0]);        // N
console.log("Third Character:", word.charAt(2)); // d

//toUpperCase() and toLowerCase()    
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());  
let city = "new york";

//trim()
let message = "   Hello World!   ";
console.log("Trimmed Message:", message.trim());

//include()
let sentence = "I love programming in JavaScript";

//alert()
alert("Welcome to Node.js Backend!");
console.log("Includes 'programming':", sentence.includes("programming"));


// trim()
let msg = "Hello World!   ";
console.log("Trimmed Message:", msg.trim());

//includes()
let phrase = "I love programming in JavaScript";    
console.log("Includes 'love:",sentence.includes("love"));

//startsWith()
let email = "admin@gmail.com";
console.log("Starts with admin:",email.startsWith("admin"));

//endsWith()
console.log("Ends with .com:",email.endsWith(".com"));

//slice( )
let fruit = "Banana";
console.log("Slice (1,4):",fruit.slice(1,4)); // ana

//substring()
console.log("substring(4,10):",lang.substring(4,10));

//replace()
let greet = "Hello World";
console.log("Replace:",greet.replace("World","Node.js"));

//replaceAll()
let hiText="Hi Hi Hi ";
console.log("Replace All:",hiText.replaceAll("Hi","Hello"));

//concat()
let a = "Hello";
let b = "World";
console.log("Concat:",a.concat("",b));

//Template Literals
let username = "Aman";
let age = 25;
console.log('My name is ${username} and age is ${age}.');

