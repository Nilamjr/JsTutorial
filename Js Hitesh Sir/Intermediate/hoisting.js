/*
    24th March 2022
    Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s New Course  
    Episode 17 - Code Hoisting
*/


// function tipper(a){
//     let bill = a;
//     console.log(bill + 5);
// }
// tipper(4);

function tipper(a){
    let bill = parseInt(a);
    console.log(bill + 5);
}


console.log(name1);
var name1 = "Nilam";

function sayMe(){
    var name1 = "Mr H";
    console.log(name1);
}

sayMe();

console.log(name1);


