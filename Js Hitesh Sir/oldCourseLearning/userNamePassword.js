let useremail = 'abc';
let password = '123455';

// console.log(password.length);

let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length > 6)){
        return true;        
    }

}

console.log(userChecker(useremail));