/* 
    FALSY VAULES::
    undefined
    null
    0
    ''
    NAN
*/

var user1;
console.log(user1);
var user2 = null;
console.log(user2);

if(user1){
    console.log("Condition is true");
}


console.log(2 + 2);
console.log("2" + 2);
console.log(2 + "2");
console.log("2" + "2");

// Coercion

var user3 = "2";

if(2 == user3){
    console.log("Its ture value");
}
if(2 === user3){
    console.log("Its false value");
}
