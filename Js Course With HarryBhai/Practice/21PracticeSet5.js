// Question 1 

// let arr = [7,42,6,36,77,2433,845];
// let takenNumberFromUser = prompt("Enter a number")
// arr.push(takenNumberFromUser)
// console.log(arr);

// Question 2 
// let arr2 = [32,53,62,63,22,24,34]
// let a2;
// do{
//     a2 = prompt("enter a number");
//     a2 = Number.parseInt(a2);
//     arr2.push(a2);
// }while(a2 != 0)

// console.log(arr2);

// Question 3 
// let arr3 = [10, 43, 56, 23, 70, 680, 34]

// let arr3Var = arr3.filter((x)=>{
//     return x%10 == 0
// }); 
// console.log(arr3Var);


// let arr4 = [1, 4, 6, 2, 70, 680, 670]

// let arr4Var = arr4.map((x)=>{
//     return x*x
// }); 
// console.log(arr4Var);


let arr5 = [1, 2, 3, 4, 5]

let arr5Var = arr5.reduce((x1, x2)=>{
    return x1*x2
});
 
console.log(arr5Var);
