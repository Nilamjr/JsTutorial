console.log("Accessing children of DOM")

// both are same 
console.log(document.body.firstChild)
console.log(document.body.childNodes[0])

// both are same 
console.log(document.body.lastChild)
console.log(document.body.childNodes[document.body.childNodes.length -1])

// To access all childnodes 

console.log(document.head.childNodes);
console.log(document.body.childNodes)