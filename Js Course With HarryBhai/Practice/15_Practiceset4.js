// Question 1
let str = "har\"";
console.log(str.length);

// Question 2

// Includes method
let sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox2";

console.log(`The word "${word}" ${sentence.includes(word) ? "is": "is not"} in the sentence`);

// starts with  
let sentence2 = "Saturday night plans";
// console.log(sentence2.startsWith('sat'));
// console.log(sentence2.startsWith('Sat', 0));

let sentenceForEnds = "cats are the best!";
// console.log(sentenceForEnds.endsWith('dgf'));
// console.log(sentenceForEnds.endsWith('best!'));
// console.log(sentenceForEnds.endsWith('best', 17));
// console.log(sentenceForEnds.endsWith('best!', 4));

let convertIntoLower = "I am Engineer";
// console.log(convertIntoLower);
// console.log(convertIntoLower.toLowerCase());


let fetchAmount = "Please give them Rs 10000";
// let amount = fetchAmount.slice("Please give them Rs".length);
// let amount = fetchAmount.slice("Please give them Rs ".length);
let amount = Number.parseInt(fetchAmount.slice("Please give them Rs ".length));

console.log(amount);
console.log(typeof amount);


let friend = "Krishna";
console.log(friend);

friend[4] = "e"
console.log(friend); //It will not change because strings are immutable