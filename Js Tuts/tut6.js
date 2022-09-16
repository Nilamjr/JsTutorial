console.log("This is tutorial for array and its method");

const nameMe = "Nilam";
const greet = "Good morning";
console.log(greet + ' '  + nameMe);

let html = "<h1> this is my heading </h1>" +
             " <p>and this is paragraph</p>"

html = html.concat("this");
// console.log(html);

// console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());
// console.log(html[1]);

// console.log(html.indexOf('>'));
// console.log(html.lastIndexOf('>'));
// console.log(html.charAt(34));
// console.log(html.indexOf('njdsadkj'));
// console.log(html.indexOf('my'));
// console.log(html.endsWith('s'));
// console.log(html.includes('is'));
// console.log(html.substring(1,6));
// console.log(html.slice(10, 20));
console.log(html.split(' '));
console.log('Its for >', html.split('>'));
console.log('Its for <', html.split('<'));
console.log(html.replace('this', 'that'));


let fruit1 = 'Graps\'';
let fruit2 = 'Mango';
let textHtml = `Hello ${nameMe}
        <h1>This is ; " Heading</h1>
        <p>I like ${fruit1} and ${fruit2}</p>`;
        
        document.body.innerHTML = textHtml;




