// 29th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 26 - Forloop


const myStates = ["Gujarat","Madhypradesh",1947,"Uttarpradesh",1955,"Odisa","Andhrapradesh"];

for(let i = 0; i < myStates.length; i++){

    // if(typeof myStates[i] !== 'string') continue;
    // if(typeof myStates[i] === 'string') continue;
    if(typeof myStates[i] !== 'string') break;

    // console.log(i + 1, myStates[i]);
}


// let i = 0;

// do {
  
//   console.log(myStates[i]);
//   if (typeof myStates[i] !== "string") break;
//   i++;
// } while (i < myStates.length);


// var i = 0;

// for(;;){
//     if(i > 3) break;
//     console.log(i);
//     i++;
// }
// console.log(myStates);

myStates.forEach((e) => (console.log(e)));
