const myTodo = [];

myTodo.push("Buy Fruits");
myTodo.push('talk to Cambly Teacher');
myTodo.push('Go to Gym');

// myTodo.forEach(function(todo, index){
//     console.log(`To do Task number ${index + 1} is ${todo}`);
// });

for(let i = 0; i < myTodo.length; i++){
    console.log(myTodo[i]);
}