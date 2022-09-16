/* 
    Nilam Rakholiya
    1st April 2022 
    VAriavles from MDN
*/

// button_A
// heading_A
console.log("I am in Variable Js file");

const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = function() {
    const name = prompt('what is your name?');
    alert(`hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
};

// buttonA.onclick = function() => {
//     const name = prompt('what is your name?');
//     alert(`hello ${name}, nice to see you!`);
//     headingA.textContent = `Welcome ${name}`;
// };


let myName;
let myAge;

console.log(myAge);

console.log()