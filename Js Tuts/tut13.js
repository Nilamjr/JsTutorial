console.log("Tutorial 13");

let allLinks = document.links;

// console.log(allLinks);

Array.from(allLinks).forEach(function(e){
    console.log(e);
});