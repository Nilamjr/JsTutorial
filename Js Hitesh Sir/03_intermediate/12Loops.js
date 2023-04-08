const myState = [
    "Gujarat",
    "Maharastra",
    "Rajasthan",
    2301,
    "Madhypradesh",
    "Assam",
    "Tamil Nadu"
];

for(let i = 0; i < myState.length; i = i+1){

    // if(typeof myState[i] !== 'string') continue;

    // if(typeof myState[i] === 'string') continue;

    if(typeof myState[i] !== 'string') break;

    // console.log(i);
    // console.log(myState[i]);
}

// let i = 0;
// while(i < myState.length){
//     // i++;
//     console.log(myState[i]);
//     i++;
// }
let i = 20;

do{
 console.log(i);
 i++;
}while(i < 10);