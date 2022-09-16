let numbers = ["one","two","three","four","five","six"];
numbers[2] = "SOMETHING";

// console.log(numbers.shift());
// console.log("Deleted number is :: ",numbers.shift());

console.log(numbers);

numbers.splice(1,1,"SOMEONE");

console.log(numbers);
