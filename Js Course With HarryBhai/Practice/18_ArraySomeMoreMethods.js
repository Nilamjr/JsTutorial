let numArray1 = [1,2,3,4,5,6,7,8,9];
delete numArray1[0];  // length will not affetct by deleteing aby delete
// console.log(numArray1);
// console.log(numArray1.length);

let numArray2 = [11,12,13,14,15,16];
let numArray3 = [111,142,123,142,152,1624];


// let mergeArray = numArray1.concat(numArray2);
let mergeArray = numArray1.concat(numArray2, numArray3);
// console.log(mergeArray);
// console.log(numArray1);
// console.log(numArray2);

const compare = (a, b) => {
    return b - a
    // return a - b
}

let sortArr = [54343,4,9,11,223,43,36,79,112];
sortArr.sort(compare); // modifies the original array
// console.log(sortArr);  
sortArr.reverse();

// console.log("Reversed Array",sortArr);


let spliceArr = [763, 5, 2, 66, 23, 5, 255, 2357, 878, 4343, 67, 24]
// spliceArr.splice(3, 3, 1000, 2000 ,3000, 4000);
// console.log(spliceArr);
let spliceReturnValue = spliceArr.splice(3, 3, 1000, 2000 ,3000, 4000);
// console.log("Array of return value",typeof  spliceReturnValue);

let sliceArr = [12,455,23,11,5 ,6, 2, 6, 23,66,6, 8, 565];
sliceArr.slice(4);
console.log(sliceArr);

// let newSlice = sliceArr.slice(4);
let newSlice = sliceArr.slice(4, 8);
console.log(newSlice);