// console.log("Its a Validation file");  

// function myValidation(){
//     let value = document.getElementById('myInput').value;
//     if(isNaN(value) || value < 1 || value > 20){
//         document.getElementById('otherOne').textContent = "If Part";

//     }else{
//         document.getElementById('otherOne').textContent = "Else part";
//     }
// }

document.querySelector('.myForm').addEventListener('submit', (event) => {
    // event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = " ";

}); 