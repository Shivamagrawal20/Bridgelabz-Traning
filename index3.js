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

//reverse()
names.reverse();
console.log("Reverse:",names);

//sort()
let unsorted = [5,2,9,1];
unsorted.sort();
console.log("Sort:",unsorted);

//for eaxch()
numbers.forEach((num)=>{
    console.log("ForEach value:",num);
});

//map() - new array return
let doubled = numbers.map((map)=>num*2);
console.log("Map(double):",doubled);

//filter()
let evenNumbers = numbers.filters((num)=>num%2 === 0);
console.log("Filter (even)",evenNumbers);

//find()
let found = numbers.find((num)=>num>30);
console.log("Find(>30):",found);

//findIndex()
let foundIndex = numbers.findIndex((num)=>num===40);
console.log("FindIndex(40):",foundIndex);

//every()
let allPositive = numbers.every((num)=>num>0);
console.log("Every (>0);",allPositive);

//some()
let hasBig = numbers.some((num)=>num>100);

//Filter adults
let adults = users.filter(user=>user)

