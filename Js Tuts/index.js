console.log("tut3");

var name1 = "Nilam";
{
    let name1 = "Krishna";
    name1 = "Piyush";
    console.log("Let Checking", name1);
}
const name2 = "Ekta";
console.log("Const CKeck", name2);

console.log("VAR Checking", name1)

// Data Types  

let checkName = "NIlam";
console.log("My name is "+ checkName);
console.log("Data Type is " +  (typeof checkName)); 

let number = 56;
console.log("Data Type is " +  (typeof number)); 

let isDriver = true;
console.log("Data Type is " +  (typeof isDriver));

let nullVar = null;
console.log("Data Type of null is " +  (typeof nullVar));

let undef = undefined;
console.log("Data Type is " +  (typeof undef));

// REference data type
 
// Array 
let myArray = [1, 2 , 3, 4 , false, "string"];
console.log("Data Type is " +  (typeof myArray));

// Object literals  

let marks = {
    Nil: 90,
    Kri: 90,
    Pam: 30
}

console.log(marks);
console.log("Data Type of marks is " +  (typeof marks));

function findNAme(){

}

console.log("Data Type is " +  (typeof findNAme));
let date = new Date();
console.log("Data Type is " +  (typeof date));

























