// Question 1 

const marks = {
    nilam: 96,
    khushal: 89,
    jay: 50,
    Nir: 40
}

// for(let i = 0; i < Object.keys(marks).length; i++){
//     console.log("The marks of" + Object.keys(marks)[i] + "are" +  marks(Object.keys(marks)[i]));
// }

for(let i = 0; i < marks.length; i++){
//  console.log("new");   
}

for(let i = 0; i < Object.keys(marks).length; i++){
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}


// Question 2

for(let key in marks){
    // console.log(key);
    console.log("Marks of " + key + " are " + marks[key]); 
}

// Question 3 
// try to run this in console because prompt is browser method 
// let cn = 5;
// let i;
// while( i != cn){
//     i = prompt('Enter a Number');
    // console.log("try again");
// }
// console.log("YOu have entered a correct number");

// Question 4 

const mean = (a, b, c, d) => {
    return (a+b+c+d)/4
}
// console.log(2, 4, 3, 6);
console.log(mean(2,4,5,7));