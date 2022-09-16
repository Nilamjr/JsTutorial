console.log("Welcome to the tutorial 12");

let a = window.document;
console.log(a);
// a = document.all;
// a = document.body;
// a = document.forms[0];

// Array.from(a).forEach(function(element){
//     console.log(element);

// })

// a = document.links[0].href;
// a = document.scripts[1];
// a = document.images;
// a = document.images[0].src;
// a = document.images[1].alt;

// let strUse = "harry";


// for(let item of a){
    // console.log("Items", item);
    // item.includes("harry");
    // console.log("Link contains harry",a.item); 
// }                                                                                                            
// a = document.links;
// Array.from(a).forEach(function(element){
//     let link = element.href;
//     // console.log(link);
//     if(link.includes("krishn")){
//         console.log("Links contain krishn",link);
//     }else{
//         console.log("there is no such string which contain krishn");
//     }
// });

// console.log(a);
// console.log(typeof a);


// let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element = element.style.color = 'yellow'
// element.innerText = "I am Nilam";
//  element.innerHTML = "<b>Its time to go</b>"
// console.log(element);


// let sele = document.querySelector('#second');
// sele = document.querySelector('b');
// sele = document.querySelector('div');
// sele = document.querySelector('h1');
// sele.style.color = "green";
// console.log(sele);


let elem = document.getElementsByClassName('child');
// elem = document.getElementsByClassName('container')[0].getElementsByClassName('child');
elem = document.getElementsByTagName('div');

// Array.from(elem).forEach(function(e){
//     console.log(e);
//     e.style.color = 'red';
// });

for(let i=0; i<elem.length; i++){
    // console.log("Its working", elem[i]);
    elem[i].style.color = "yellow";
    // console.log("first one", elem[0].getElementsByClassName('child'));
}

// console.log(elem);

var strlinks = "seo";
var linksFormSite = document.links;
// linksFormSite[0];

// console.log("Links from sites",linksFormSite[4]);


// Array.from(linksFormSite).forEach(function(elem){
//     let i = elem;

//     let href = i.href;


//     console.log(href);

//     if(href.includes('seo')){
//         console.log("it includes seo");
//     }else{
//         console.log("it doesn't include seo");
//     }

// });















