console.log('we are on tutorial 18');

let btn = document.getElementById('btn-3');

btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

function func1(e){
    console.log("thanks", e);
    e.preventDefault();
}

// function func2(e){
//     console.log("its a double click", e);
//     e.preventDefault();
// }

// function func3(e){
//     console.log("its mousedown event", e);
//     e.preventDefault();
// }

document.querySelector(".use1").addEventListener('mouseenter', function(){
 console.log("your mouse enter event is here");
 
});

document.querySelector('.container').addEventListener('mousemove',function(e){

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
    console.log(`rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`);
})