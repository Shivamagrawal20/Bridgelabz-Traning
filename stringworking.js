// input = "iAmAbC"
// OUTPUT = "i aM aBc"

let input = "iAmAbC";
let parts = input.match(/[A-Z][a-z]*|[a-z]+|[A-Z]+/g);
let output = parts.join(' ');
console.log(output); // Output: i aM aBc

// Explanation:


//input ="aabbcc"
//output = a2b2c2
let input = "aabbcc";
let result = " ";
input.split(input);
console.log(input);

 // Left-Rotate String by K Input: "abcde", k=2 → Output: "cdeab"
 function rotate(str){
    for(let i=0;i<str.length;i++){
        return 0
    }
 }