/*
    Define a Function that can answer the role of a user.
    A user can be on following roles:

    admin = "Full access"
    subAdmin = "Create content or delete"
    testPrep = "Delete or Create tests"
    User = "Consume Content"
    other = "Trial User"

    Input: getUserRole(name, role);
*/



var getUserRole = function (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`;
            // break; //not necessary 
        case "subadmin":
            return `${name} is subadmin with access to create and delete course`;
            // break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            // break;
        case "user":
            return `${name} is a user to consume content`; 
            // break;
        default:
            return `${name} is a trial user`; 
            // break;
    } 

}

function getUserRole (name, role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`;
            // break; //not necessary 
        case "subadmin":
            return `${name} is subadmin with access to create and delete course`;
            // break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            // break;
        case "user":
            return `${name} is a user to consume content`; 
            // break;
        default:
            return `${name} is a trial user`; 
            // break;
    } 

}


getUserRole("Nilam", "user");
console.log(getUserRole("Nilam", "user"));

var getRole = getUserRole("Sammy", "abd");

console.log(getRole);


