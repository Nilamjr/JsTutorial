


var x = 7;

function getName(){
    console.log("Its hoisting practice");
}

console.log(x);

console.log("why undefined",getName());

// var getName = () => {
//     console.log("Its Arrow function");
// }