let numArr = [1,3,4,6,8,24,232]

// for(let i=0; i<numArr.length; i++){
//     console.log(numArr[i]);
// }

// Using for Each 

// numArr.forEach((elem) => {
//     console.log(elem * elem);
// })

// Array.from method 

let myName = "Nilam";
let arrFromName = Array.from(myName);
// console.log(arrFromName);

// for...of 

for(let item of numArr){
    // console.log(item);
}


// for In 

for(let i in numArr){
    // console.log(i);
    console.log(`the key of ${numArr[i]} is ${i}`);
}