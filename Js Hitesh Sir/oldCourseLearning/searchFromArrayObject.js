// Trello version4


// const myTodos = ["Buy Banana","GO to Gym", "Make Breakfast"];

// let result = myTodos.indexOf("Buy Banana");

// console.log(myTodos[result]);

// const newTodos = [{
//     title:"Buy Banana",
//     isDone: false,
// }, {
//     title:"Go to Gym",
//     isDone: false,
// }, {
//     title:"Make Breakfast",
//     isDone: true,
// }];


// const accessObj = newTodos.findIndex(function(todo, index){
//     console.log("Every Element of array",todo);
//     return todo.title == "Go to Gym";
// });
// console.log(accessObj);

// Method 1

// const findTodo = function(anyToDos, title){
//     const index = anyToDos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase();
//     });
//     return anyToDos[index];
// }

// let printMe = findTodo(newTodos, 'Go To gym');
// console.log(printMe);

// Method 2

// const findTodo = function(otherTodos, title){
//     return titleReturned = otherTodos.find(function(todos, index){
//         return todos.title.toLowerCase() === title.toLowerCase(); 
//     });
// };

// let printMe = findTodo(newTodos, 'buy banana');
// console.log(printMe);


const infoNotes = [{
    name:"nilam",
    role:"Developer",
},{
    name:"Parth",
    role:"Designer"
},{
    name:"Krishna",
    role:"Chemist"
}]

const findInfoIndex = infoNotes.findIndex(function(info, index){
    // console.log(info.name);
    return info.name == "parth";
});


const findName = function(infoNote, name){
    const index = infoNote.findIndex(function(note, index){
        return note.name;
    });
    return infoNote[index];
}   

// console.log(findName(infoNotes, "Parth"));