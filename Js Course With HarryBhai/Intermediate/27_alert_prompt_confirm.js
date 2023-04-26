// alert("Script is working");

alert("please enter a here");
// let a = prompt("Enter a")
let a = prompt("Enter a", "4894");


alert("You entered a type of " + (typeof a))

a = Number.parseInt(a)
alert("Now type of a is" + (typeof a))

let write = confirm("Do you want to write it to the page?")

if(write){
    document.write(a);
}else{
    document.write("Please allow me to write")
}

