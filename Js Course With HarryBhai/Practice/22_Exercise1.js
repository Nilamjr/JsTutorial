let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);
// console.log(typeof randomNumber);

// let guessCounter = 0;
// let chances = 100;


console.log(typeof enteredNum);
console.log(enteredNum)

while(enteredNum === randomNumber){
    let enteredNum = prompt("Enter a Number between 1 to 100");
    enteredNum = Number.parseInt(enteredNum);   

    if(enteredNum < randomNumber){
        console.log("Guessed Number is smaller than Actual Number");
    }else if(enteredNum > randomNumber ){
        console.log("Guessed Number is greater than Actual Number");
    }else{
        alert("You wno the game");
        console.log("You won the game");
    }    
}


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