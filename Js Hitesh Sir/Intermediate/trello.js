/*
    25th March 2022
    Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s old Course  
    Episode 16 - To do list- trello
*/
 

var myTodos = [];

myTodos.push("Buy bread");
myTodos.push("Go to the gym");
myTodos.push("Eat Sprouts");

myTodos.forEach(function(todo, index){
    // console.log(`Your task number ${index + 1} is ${todo}`);
})


var todoTask = [];

todoTask.unshift("First");
todoTask.unshift("Second");
todoTask.unshift("Third");

// for(let i = 0; i < todoTask.length; i++){
//     console.log(`Number is ${i + 1} of my task ${todoTask[i]}`);
//     console.log("First",todoTask);
// }

// for(let i = todoTask.length - 1; i >= 0; i--){
//     console.log(`Number is ${i + 1} of my task ${todoTask[i]}`);
//     console.log("Second",todoTask);
// }

var arrTask = [1,2,3,4,5,6];
arrTask.unshift(1);

// console.log("First",arrTask);

arrTask.unshift(3);
// console.log("Second",arrTask);

/* 
    28th march-- from old course - episode 18th 
    for each loop // assignment 1
*/


const days = ['Mon','Tue','Wed','Thur','Fri','Sat'];
let sayHello = function(name){
    console.log(`Greetings to the ${name}`);
}

// console.log("HELLLOOOO")
// days.forEach(sayHello);

// days.forEach(function(name){
//     console.log(`Greetings to the ${name}`);
// });

const month = ['Jan','Feb','Mar','Apr','MAy','Jun','July','Aug','Sep','Oct','Nov','Dec'];
// let monthIterate = function(e,i){
//     console.log(`Its ${i+1} ${e}`);
// }

// month.forEach(monthIterate);


month.forEach(function(e,i){
    // console.log(`Its ${i+1} Month ${e}`);
});


/*
    Assignment 2 :: Todo List
*/

const myTodo = ["Wake up at 4","Have breakfast","Go to gym","Exercise Of Program"];

myTodo.forEach(function(e,i){
    console.log(`its Task : ${i + 1} ${e}`);
})

