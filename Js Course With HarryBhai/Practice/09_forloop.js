// Program to add first "n" natural number 

let sum = 0;
let n = 3;
n = Number.parseInt(n);

for(let i=1; i<=n; i++){
 
    // console.log("before i",i);
    // i=1
    // i=2
    // i=3
   
    // console.log("before sum>>>",sum);
    // sum= 0
    // sum= 1
    // sum= 3
   
    // console.log("sum + i",sum, "+" + i, sum += i);  

    // 0+1=1
    // 1+2=3
    // 3+3=6
    
    // console.log("After i",i);
    // i=1
    // i=2
    // i=3
    

    
    // console.log("After sum>>>",sum);
    // sum= 1
    // sum= 3
    // sum= 6
    
    // console.log("sum of first" + n + "natural number is" + sum);
    // sum 0f first 3 natural number is sum = 1
    // sum 0f first 3 natural number is sum = 3
    // sum 0f first 3 natural number is sum = 6
}

for(let i=0; i<n; i++){
    console.log("sum",sum);
    console.log(sum += (i+1));
    // console.log("sum",sum);
    // console.log(sum+=i);
    // console.log("sum after", sum);
}


// Write program of factorial here
// print from 1 number to other 

