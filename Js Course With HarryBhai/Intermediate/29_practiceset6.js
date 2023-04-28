// let age = prompt("Enter your age");
// age = Number.parseInt(age);


let runAgain = true;
const canDrive = (age)=>{
    return age>=18?true:false
}

while(runAgain){

    // we want to show this prompt when user want to play again 
    let age = prompt("Enter your age");
    age = Number.parseInt(age);     

    if(age<0){
        console.error("please enter a valid age")
        // break;
        // continue;
        // return; //it showing illegal statement
    }

    // const canDrive = ()=>{
    //     return age>=18?true:false
    // }
 
    if(canDrive(age)){
        alert("You can Drive");
    }else{
        alert("You can not drive");
    }

    runAgain = confirm("Do you want to play again?")

}

