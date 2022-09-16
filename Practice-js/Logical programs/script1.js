// swap numbers  


// let a = 10;
// let b = 3;

// console.log("Old A",a);
// console.log("Old B",b);

// Method first 
// a = a + b;
// b = a - b; 
// a = a - b;

// console.log("New A",a);
// console.log("New B",b);

// Method Second
let a = 4;
let b = 8;

// console.log("Old A",a);
// console.log("Old B",b);

a = a ^ b;  // 4- 0100, 8-1000  ===> a = 1100  
b = a ^ b;  // a = 1100  b = 1000 ===> b = 0100-4
a = a ^ b;  // a = 1100 b = 0100  ===> a = 1000-8


// console.log("New A",a);
// console.log("New B",b);


// Third Method 
// a = 9;
// b = 4;

// [a,b] = [b,a];

// console.log("A:::",a);
// console.log("B:::",b);

// Fourth Method 

// a = 10;
// b = 20;

// a = b + (b=a,0); //a = b + 0

// console.log("A:::",a);
// console.log("B:::",b);


// Fifth Method 

a = 30;
b = 20;

a = (a*b) / (b=a);

console.log("A:::",a);
console.log("B:::",b);