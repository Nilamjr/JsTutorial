// 24th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s New Course  

// Episode 18 - scope chaining

var fname = "Nilam";

console.log("Line Number 3", fname);

function fName(){
    // var fname = "Miss N";
    console.log("Line number 7", fname);

    fNameTwo();

    function fNameTwo(){
        var fname = "Krishna"
        console.log("line number 13", fname);
    }
}
fName();