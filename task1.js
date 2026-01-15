// input = "iAmAbC"
// OUTPUT = "i aM aBc"

let input = "iAmAbC";
let parts = input.match(/[A-Z][a-z]*|[a-z]+|[A-Z]+/g);
let output = parts.join(' ');
console.log(output); // Output: i aM aBc


