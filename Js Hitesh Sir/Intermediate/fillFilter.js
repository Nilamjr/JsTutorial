// 26th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 22 Related to Arrays method Fill and Filter

var testArray = [2,52,6,34,76,24,7,9,1,0];

// console.log(testArray);
// console.log(testArray.fill("h",2,5));
// console.log(testArray.fill("h",0));


const myNumber = [23,54,6,67,23,68,34,88,71,90];

// const result = myNumber.filter((num) => num < 60);
const result = myNumber.filter((num) => num > 60);
// console.log(result);

// episode 23
// slice and splice

var user = ["Ted","Tim","Ton","Sam","Sor","Sod"];
// console.log(user.slice(2));
// console.log(user.slice(2, 3));
// console.log(user.slice(1));

var userNum = [1,2,3,4,5,6];
// console.log(userNum.slice(1,3));

user.splice(3,2,"hii","BYE");
console.log(user)

