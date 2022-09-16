// function a(){
    
//     function c(){
//         console.log(b);
//     }

//     c();
// }

// var b = 10;
// a();


function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b = 10;
a(); 