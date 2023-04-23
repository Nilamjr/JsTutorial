// higher order Array Methods - Map Reduce and Filter 
// Map Array 

let mapArr = [20, 30, 50];

mapArr.map((value, array, index)=>{
    // console.log(value, array,"index", index);
});
let a = mapArr.map((index, value )=>{
    // console.log("Inside returened variable",index);
    // return value
    return value + index
    // return index < 10   checking whether filter is working in map 
});
// console.log("returened value from map array", a)

// Filter Method 

let arrFilter = [53, 34, 25, 98, 12]
arrFilter.filter((value)=>{
//    console.log(value)
});

let filterVar = arrFilter.filter((value)=>{
    return value < 20
});

// console.log(filterVar);

let reduceArr = [1, 4, 2, 2, 3, 5, 1]
// reduceArr.reduce((h1, h2) => {
//     return h1 + h2
// });
// let reduceVar = reduceArr.reduce((h1, h2) => {
//     return h1 + h2
// });

// let reduceVar = reduceArr.reduce((h1, h2) => {
//     return h1 + h2
// });

const reducFunc = (h1, h2) => {
    return h1 + h2
}
let reduceVar = reduceArr.reduce(reducFunc);
console.log(reduceVar);


