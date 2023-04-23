let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let guessCounter = 0;
let chances = 100;

let EnteredNum = prompt("Enter a Number between 1 to 100");

if(EnteredNum == randomNumber){
    console.log("You are a winner");
    console.log("In If")
}else{
    console.log("Enter again");
    EnteredNum = prompt("Enter number again");
    chances -= 100
    console.log("Your remain chances are", chances);
    console.log("In else")
}   