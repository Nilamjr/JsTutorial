console.log("its tutorial 10 for javascript function");

let bPerson = "Nilam";  


// let greet = `"Happy birthday! I hope all your birthday wishes and dreams come true.”
// “A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be 
// fulfilled on your birthday and always. Happy birthday!” " ` ;

// let personGreet = bPerson + greet;
// console.log(personGreet);

function greeting(bName, thanks='Thank you'){

   console.log(` ${bName} "Happy birthday! I hope all your birthday wishes and dreams come true.”
    “A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be 
    fulfilled on your birthday and always. Happy birthday!” ${thanks}" `);
    return 1;
}
// console.log("Its greet from", greeting('Parth'));

let val = greeting('Piyush');
console.log(val);

// let myGreet = function(gName){
//     console.log("Enter GName here", gName);
// }
// console.log(myGreet('Nilamm')); 
// let vall = myGreet('NilamP');
// console.log(vall);

// const myObj = {
//     tName: 'Nill',
//     game: function(){
//         return 'GTA';
//     }
// }
// console.log(myObj.game());

// let i = 234;
// function repe(rName){
//     var i = 8;
//     console.log(`hey ${rName} your number is.. ${i}`);
// }
// console.log(repe('Sujan'), i);


// const greetName = "Nilam";
// console.log(`${greetName} Happy birthday`);

// const greeFun = function(grName, thankAlot = 'Thank you'){
//     console.log(`${grName} helloo0....${thankAlot}`);
//     return 1;
// }
// let nameGr = "Krishna";
// // greet(nameGr);

// let retVal = greeFun('Nija');
// console.log(retVal);

const myObj = {
    obName: 'MyName',
    game: function(){
        return "It lovely";
    }
}

console.log(myObj.game());

// const arr = [1,2,3,4,5];
// arr.forEach(function(element, index, array){
//     console.log(index, element); 
// })  

// Scope in js

// if(1){
// var i = 344;
// console.log("first",i)
// }


// console.log("Second",i)

// function checkScope(){
//     let i = 9;
//     console.log(`its variable for ${i}`);
// }

// checkScope();
// console.log(`its global scope of ${i}`);


