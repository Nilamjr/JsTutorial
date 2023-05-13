console.log("37th Video of Javascript");
// console.log(id1); not a good practice 

let id1 = document.getElementById('id1'); 
console.log(id1.matches('.class'))
console.log(id1.matches('.box'))
let sp1 = document.getElementById('sp1')
// sp1.closest('.elem1')
console.log(sp1.closest('.elem1'));
// id1.matches('.class')
// console.log(sp1)


console.log(id1.contains(sp1))
console.log(sp1.contains(id1))
console.log(sp1.contains(sp1))