// console.log("Its todo App");

// var hElem = document.createElement('h1');
// var hValue = document.createTextNode('Hello world');

// hElem.appendChild(hValue);

// document.querySelector('h1').appendChild(hElem);

// var val = 5;

// while(val > 0){
//     console.log(val);
//     val--;
// }
var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem(){
    console.log("add button clicked");
}
function removeItem(){
    // console.log("Delete button clicked");
    li = ul.children;
    console.log(li);

    for(let i = 0; i < li.length; i++){
        const elem = li[i];
        console.log(elem);
    }

}