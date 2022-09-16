let iAmGlobal = "someValue";

if(true){
    // var iAmLocal = "someMoreValue";
    let iAmLocal = "someMoreValue";
    // console.log(iAmGlobal);
    // console.log(iAmLocal);
}

// console.log(iAmLocal);
// console.log(iAmGlobal);


// Kings problem 

let king = "Dashrash";

if(true){
    // let king = "Ram";
    console.log("King is", king);
    if(true){
        // let king = "Luv-kush";
        king = "Bharat";
        console.log("Inside state is other king ", king);
    }
}

if(true){
    console.log("Second Parts King is ",king);
}