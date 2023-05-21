// Tag Name , Node Name , innerHTML 


// document.getElementsByTagName('span')[0]
let x = document.getElementsByTagName('span')[0];
// console.log(x);
// console.log(x.nodeName)
// console.log(x.)

// console.dir(document.getElementsByTagName('span')[0]);

console.log("First Child Node Name",document.body.firstChild.nodeName);
console.log("First Element Child Node Name",document.body.firstElementChild.nodeName);

// innerHTML works only for Element nodes 
// console.log(first.innerHTML); // we can take "id" directly like this but its not good practice
first.innerHTML = "<i>I am Nilam And I am in Australia right now</i>"

// console.log(first.innerHTML);


let y = document.body.firstElementChild;
// console.log(y)

// console.log(y.innerHTML);
// console.log(y.outerHTML);
y.outerHTML = "<div>I am attending my lecture in Sydney</div>"
console.log(y.outerHTML);


// For others nodes except nodeElement, we can use .data or .nodeValue  
// document.body.firstChild.data
// document.body.firstChild.nodeValue


// document.body.textContent

// $0.hidden = false
