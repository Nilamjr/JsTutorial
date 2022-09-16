// let sayHello = function(name){
//     console.log(`Greetings to the ${name}`);
// }

// sayHello('john');

let fullName = function(firstname, lastname){
    console.log(`Welcome to the LOC`);
    console.log(`Happy to have you ${firstname} ${lastname}`);
}

fullName("Nilam", "Rakholiya");


let myAdder = function(num1, num2){
    let added = num1 + num2;
    return added;
}

console.log(myAdder(3, 6));

let myMultipler = function(num1, num2){
    return  num1 * num2;
}

console.log(myMultipler(3, 6));


let guestuser = function(name="M", courseCount=2){
    return "Hello " + name + " Your course count is:" + courseCount;
}

// console.log(guestuser("Nilam", 2));
console.log(guestuser());
