// 21st August

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// console.log(z);

// z();


function z(){
    var b = 1000;
    function x(){
        var a = 7
        function y(){
            console.log(a, b);
        }
        a = 20;
        y();
    }
    x();
}
z();

