let num = [6, 2, 4, 9, 224, 27];
// console.log(typeof num);
let convertNumToStr = num.toString();
// console.log(convertNumToStr);
// console.log(typeof convertNumToStr);

let arrayJoin = num.join("-");
// console.log(arrayJoin);
// console.log(arrayJoin, typeof arrayJoin);
// console.log(num, typeof num);

// num.pop();
// let r = num.pop(); //it returns the popped element from the array
// console.log(num);
// console.log(r, typeof r);
// let pushReturns = num.push(1); //it returns the new array's length
// console.log(num, pushReturns);

// let arrayShift = num.shift(); //Removes the element from the start of  the array
// console.log(num);
// console.log(arrayShift, typeof arrayShift);
let arrayUnShift = num.unshift(8); //it returns the new array length
console.log(num);
console.log(arrayUnShift, typeof arrayUnShift);


