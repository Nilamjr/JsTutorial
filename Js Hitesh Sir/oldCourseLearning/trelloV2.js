// 29th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 20 - Trello Version 2


let myTodos = {
    day: "Monday",
    meetings: 0,
    meetDone: 0
}

let addMeeting = function(todo, meet = 0){
    // myTodos.meetings =
    todo.meetings = todo.meetings + meet;
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet
}
let resetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}
let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone;
    return `You have ${meetLeft} of meetings today! `;
}

console.log(addMeeting(myTodos, 4));
console.log(addMeeting(myTodos, 2));
console.log(meetDone(myTodos, 3));


console.log(myTodos);
console.log(getSummaryOfDay(myTodos));