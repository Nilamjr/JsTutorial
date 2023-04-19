console.log("Its an Array");

let marksOfClass12 = [91, 82, 84, 70, null, false, "Nor present"];

// console.log(marksOfClass12);
// console.log(marksOfClass12[0]);
// console.log(marksOfClass12[1]);
// console.log(marksOfClass12[2]);
// console.log(marksOfClass12[3]);
// console.log(marksOfClass12[4]);
// console.log(marksOfClass12[5]);
// console.log(marksOfClass12[6]);
// console.log(marksOfClass12[7]); //its undefined because valuse does not exists
// console.log("The length of marksOfClass12 is ",marksOfClass12.length);

// can we change the value of array ?  Yes definitely

// console.log(marksOfClass12);
// marksOfClass12[7] = 99;
// marksOfClass12[0] = 98;
//Arrays are mutable and can be changed

for(let i = 0; i < marksOfClass12.length; i++){
    console.log("Marks of Students In loop",marksOfClass12[i]);
}