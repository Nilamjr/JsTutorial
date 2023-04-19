// let myName = "Nilam\"";
// let myName = "Nilam____________________________________";
let myName = "Nilam";
let friend = "Khushal";


console.log(myName + friend);
// Properties and Methods 

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.table(myName.slice(2));
// console.log(myName.slice(2, 4));
// console.log(myName.replace("Nil", "khush"));
// console.log(myName.concat(" is a friend of ", friend));

// let newFriend = "           Khush    ";
// console.log(newFriend);
// console.log(newFriend.trim());

let fri = "Nutan";

console.log(fri[0]);
console.log(fri[1]);
fri[5] = "U"; //this is not possible with the string but we can do this on Arrays
console.log("Checking whether its changing the string or not",fri);

for(let i = 0; i < fri.length; i++){
    // console.log(fri[i]);
}
fri[4] = "M" //this is not possible
console.log(fri); //string always stay same but give new string when we apply methods or properties on it