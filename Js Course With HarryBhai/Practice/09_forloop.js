// Program to add first "n" natural number 

let sum = 0;
let n = 3;
n = Number.parseInt(n);

for(let i=1; i<=n; i++){
    console.log("Before sum>>>>>", sum);
    console.log("Before i", i);
    console.log("sum + i",sum, "+" + i, sum += i);      
    console.log("After i",i);
    console.log("After sum>>>",sum);
    // sum += i;
    console.log("sum of first" + n + "natural number is" + sum);

}