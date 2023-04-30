let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);
// console.log(typeof randomNumber);

// let guessCounter = 0;
// let chances = 100;


let enteredNum = prompt("Enter a Number between 1 to 100");
enteredNum = Number.parseInt(enteredNum);   
console.log(enteredNum)
console.log(typeof enteredNum);

// while(enteredNum !== randomNumber){
//     if(enteredNum < randomNumber){
//         alert("Guessed Number is smaller than Actual Number");
//     }else if(enteredNum > randomNumber ){
//         alert("Guessed Number is greater than Actual Number");
//     }else{
//         alert("You won the game");
//         break;
//     }
//     enteredNum = prompt("Enter a Number between 1 to 100");    
// }

// if(EnteredNum === randomNumber){
//     console.log("You are a winner");
//     console.log("In If")
// }else{
//     console.log("Enter again");
//     EnteredNum = prompt("Enter number again");
//     chances -= 100
//     console.log("Your remain chances are", chances);
//     console.log("In else")
// }   