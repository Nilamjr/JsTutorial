console.log("its tutorail 16");

// let element = document.createElement('li');
// element.className = "elem_list";
// element.id = "createdLi";
// element.setAttribute('title', 'myTitle');
// element.innerText = "Its by Nilam";

// let text = document.createTextNode('I believe');
// element.appendChild(text);

// let ul = document.querySelector('ul.list_ul');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);
// let elem2 = document.createElement('h3');
// elem2.id = 'elem2_id';
// elem2.className = 'elem2_class';
// let text2 = document.createTextNode('I am second node');
// elem2.appendChild(text2);

// element.replaceWith(elem2);

// let myul = document.getElementById('ful');
// myul.replaceChild(element, document.getElementById('first_el'));
// myul.removeChild(document.getElementById('last_el'));

// let pr = elem2.getAttribute('id');
// pr = elem2.getAttribute('class');
// pr = elem2.hasAttribute('href');
// pr = elem2.removeAttribute('id');
// pr = elem2.setAttribute('title', 'elem2_title');
// console.log(elem2);

// console.log(elem2);

// let newElem = document.createElement('h1');
// let txt1= document.createTextNode = "Go to CodewithHarry";

// newElem.innerText = "you should Go to CodewithHarry";

// let elemLink = document.createElement('a');
// elemLink.setAttribute('href', 'http://codewithharry.com');

// let linkTxt = document.createTextNode('Its Link');

// elemLink.appendChild(linkTxt);

// console.log(elemLink);

// console.log(newElem);

// document.body.appendChild(newElem);
// document.body.appendChild(linkTxt);

let newElem1 = document.createElement('li');
newElem1.className = "child-li";
newElem1.id = "elemCreated";
newElem1.setAttribute("title","Its new Li");

let elmTxt = document.createTextNode("Its created by Node");
newElem1.appendChild(elmTxt);

// newElem1.innerText = "Its Li of appended";

let appendInUl = document.getElementById('useUl');
appendInUl.appendChild(newElem1);
// console.log(newElem1);

let newElem2 = document.createElement("input");
newElem2.id = "elm2";
newElem2.className = "elem2Class";

let elem2Node = document.createTextNode("Its Second Elem for replace");
// newElem1.appendChild(elem2Node);

// console.log(newElem2);
newElem1.replaceWith(newElem2);

let ulReplace = document.getElementById('useUl');
ulReplace.replaceChild(newElem1, document.getElementById('fui'));

ulReplace.removeChild(document.getElementById('lui'));

let prEl = newElem2.getAttribute('id');
prEl = newElem2.getAttribute('class');
prEl = newElem2.hasAttribute('href');

newElem2.removeAttribute('id');






console.log("id of pr", prEl);








