console.log("closures from Webdev simplified");

// const myName = "Nilam";
// let myName = "Nilam";

// function printName(){
//     console.log(myName);
// }

// myName = "Krishna";

// printName();

// myName = "Nilam J";

// printName();

function outer(outerVar){
    return function inner(innerVar){
        console.log("Outer variable", outerVar);
        console.log("Inner Variable", innerVar);
    }
}

const newFunction = outer('Outside');
newFunction('Inside'); 





















