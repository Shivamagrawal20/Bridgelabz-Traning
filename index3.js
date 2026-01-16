let numbers =[10,20,30,40];
let names = ["Aman","Ravi","Neha"];

console.log(numbers);
console.log(names);

//length
console.log(mystring.length);

//pop() - remove from end
numbers.pop();
console.log("After loop:",numbers);

//unshift() - add at start
numbers.unshift(5);
console.log("After unshift:",numbers);

//shift() - remove from start
numbers.shift();
console.log("After shift",numbers);

//indexof
console.log("Index of 30:",numbers.indexOf(30));

//includes
console.log("includes 40",numbers.includes(40));

//slice() - does not change the original array
let slicedArray = numbers.slice(1,4);
console.log("slice:",slicedArray);
console.log("Original Array:",numbers);

//concat()
let moreNumbers = [70,80];
let combined = numbers.concat(moreNumbers);
console.log("concat",combined);

//join()
console.log("join:",names.join(" - "));

