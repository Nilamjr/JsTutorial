// function statement  and function declaration


a();

function a(){
    // console.log("a is called");
}

// function expression 

var b = function(){
    // console.log("b is called");
}
b();

// Anonymous function -- without a name, type of function statement, use in function expression
// function (){}

// Named function Expression 
// same as function expression but with a name 

var c = function xy(){
    // console.log(xy);
}
c();


// First class function 

var d = function(param){
    // console.log(param);
    return function dfg(){

    };
}
// d(function(){
//     // console.log("this is argument for d");
// })

// or we can do like this 

// function abc(){

// }
// d(abc);

// console.log("return a function" ,d());

setTimeout(function(){
    console.log("timer");
}, 5000);

function k(j){
    console.log("Its K");
    j();
}
k(function j(){
    console.log("its J");
})

