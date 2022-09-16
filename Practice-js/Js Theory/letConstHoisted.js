// let and const decalration are hoisted 

// Memory is allocated to variable and functions 
// even before it executes single line of code
// and its called hoisting 

// Temporal dead zone is a time when let variable is hoisted till it is initialize some value 

// we can not redeclare varible which is made using let 
// const even more strict than let 





let a = 10;

// let a = 1000; 
// var a = 12;
//  can not use same name in same scope again its posiible in "var" 

var b = 100;
var b = 10000;
console.log(b);
// it can not run 
// const y;  it should be initialize right there
// y = 1000; 

// ReferenceError  if try to acess variable in temoral dead zone or use variable which is not even decalre
// syntax Error
// type error

// const x = 1000;
// x = 12;
 // type error