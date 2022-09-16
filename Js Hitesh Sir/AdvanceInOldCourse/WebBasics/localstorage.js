console.log("Its localstorage exercise");

// localStorage.setItem("hero", "Thor");
localStorage.setItem("todo", "Go to gym");

var myhero = localStorage.getItem("hero");
console.log(myhero);

console.log(localStorage.getItem("todo"));

localStorage.setItem("todo", "Buy Banana");
console.log(localStorage.getItem("todo"));


// localStorage.removeItem("hero");
localStorage.clear();

localStorage.getItem("hero");
console.log(myhero);