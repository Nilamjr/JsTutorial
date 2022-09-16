console.log("we are at repeated lecture of String Methods");

const mName = "Nilam";
const greeting = "Have a goodday";
console.log(mName + ' ' + greeting);

let conHtml = `Hello \' there 
        <button>
            SEND
        </button>
        `   
        document.body.innerHTML = conHtml;

let hmlCon = "This Is Practice Thing ";
// console.log(hmlCon.concat('here it is', ' now'));

// hmlCon = hmlCon.toUpperCase();
// hmlCon = hmlCon.toLowerCase();
// console.log(hmlCon.length);
// console.log(hmlCon.toLowerCase());
// console.log(hmlCon.toUpperCase());
// console.log(hmlCon);

console.log(hmlCon[0]);
console.log(hmlCon.indexOf('T'));
console.log(hmlCon.indexOf('ryueryi'));
console.log(hmlCon.lastIndexOf('T'));
console.log(hmlCon.charAt(5));
console.log(hmlCon.endsWith('Thing '));
console.log(hmlCon.includes('ng'))
console.log(hmlCon.substring(1 ,5));
console.log(hmlCon.slice(8, 20));

console.log(hmlCon.split(' '));
console.log(hmlCon.split('T'));
console.log(hmlCon.replace('This', 'It'));

let thankText1 = 'Thank';
let thankText2 = 'You';
let conHtml2 = ` 
        <button>
            SENDING 
        </button>
        <p>${thankText1}${thankText2}</p>
        <i><b>So Much 'Code With Harry'</b></i> 
        `   
        document.body.innerHTML = conHtml2;


