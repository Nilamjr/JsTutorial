// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentURI);
// console.log(document.URL);

document.title = "Its Checking for title";

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));

// document.getElementById('idone') = 'there is something';

// const myElement = document.querySelector('p');
// const myElement = document.querySelectorAll('p');

// console.log(myElement);
// console.log(myElement[3]);

// const myElement = document.querySelectorAll('#idone');
// console.log(myElement[0]);

// const myPElement = document.querySelector('p');
// myPElement.textContent = 'I am being changed by JS';
// console.log(myPElement);

const myAllPElement = document.querySelectorAll('p');

// myAllPElement.forEach(function(p){
    // p.textContent = "I am being changed using loop in JS";   
    // p.remove();
// });

// myAllPElement.forEach((p) => p.textContent = "I am Single line");

// const newPara = document.createElement('p');
// newPara.textContent = "I was added via Js";

// document.querySelector('body').appendChild(newPara);

// document.querySelector('button').addEventListener('click', (event) => {
//     console.log('button was pressed');
//     event.target.textContent = "I was pressed";
// });

// document.querySelector("#myInput").addEventListener('change',function(event){
//     console.log(event.target.value);
// })

document.querySelector("#myInput").addEventListener('input',(event) => {
    console.log(event.target.value);
});


