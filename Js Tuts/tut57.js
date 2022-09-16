// Maps in Javascript: we can use any type of key or value 
//Nilam Rakholiya 16th Sep 22

console.log("Tutorial 57");


const myMap = new Map();

const key1 = 1, key2 = {name: 'nilam'} ,key3 = function(){};

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');

myMap.set(key3, 'This is an empty function');


let value1 = myMap.get(key3);
// console.log(value1);

// console.log(myMap.size);

for(let [key, value] of myMap){
    // console.log(key, value);
}

// get only keys 
for(let key of myMap.keys()){
    // console.log("Key is",key);
}

// get only values 
for(let value of myMap.values()){
    // console.log("Values::",value);
}

// with foreach 

myMap.forEach((value, key)=>{
    // console.log("Key is",key);
    // console.log("value is",value);
})

// myMap.forEach((value) => console.log('print value no matter what',`${value}`));


// Converting map to an Array 

let myArray = Array.from(myMap);
// console.log(myArray);


// converting map Keys to an array 

let myKeyArr = Array.from(myMap.keys());
// console.log("Key array is",myKeyArr);

let myValueArr = Array.from(myMap.values());
// console.log("Value array is", myValueArr);

// console.log(myMap);

myMap.delete(1);
// console.log(myMap);

myMap.delete(2);
// console.log(myMap);

// myMap.delete(1);
console.log(myMap);