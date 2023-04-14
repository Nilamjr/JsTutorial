console.log("Learning The Functions");
let a = 2;
let b = 4;
let c = 1;

function onePlusAvg(x, y){
    return Math.round(1 + (x+y)/2);
}

const sum = (p, q) => {
    return p + q; 
}

const greet = () => {
    // console.log("Hello");
    return "Hii";
}

// greet();

let greetVar = greet();
console.log(greetVar);
console.log("One plus Avarage of a and b is", onePlusAvg(a, b));
console.log("One plus Avarage of a and b is", onePlusAvg(b, c));
console.log("One plus Avarage of a and b is", onePlusAvg(a, c));
console.log("sum of a and b is", sum(a, b));
