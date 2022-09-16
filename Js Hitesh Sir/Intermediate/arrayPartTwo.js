// 25th and 26th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 20-21 Related to Arrays

// console.log(Array.from("nilam"));

function isEven(element){
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false; 

    return element % 2 === 0;
}

// console.log(isEven(4));

var isEven = (element) => {
     return element % 2 === 0;
}

// console.log(isEven(6));

// var result = [2,4,6,8,5,10].every(isEven); 
// console.log(result);

// var result = [2,3,5,6,8].every((e)=>{
//     return e % 2 === 0;
// });

// console.log(result); 

// var result = [2,4,10,6,8].every((e) => e % 2 === 0);
// console.log(result);

var result = [2,4,10,6,3,8].every((e) => (e % 2 === 0));
console.log(result);