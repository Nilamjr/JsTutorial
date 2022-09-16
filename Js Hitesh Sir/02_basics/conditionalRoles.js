/*
    admin = "Full access"
    subAdmin = "Create content or delete"
    testPrep = "Delete or Create tests"
    User = Consume Content
*/

var user = "abc";

switch (user) {
    case "admin":
        console.log("Full access");
        break;
    case "subadmin":
        console.log("Create content or delete");
        break;
    case "testprep": 
        console.log("Delete or Create tests");
        break;
    case "user":
        console.log("Consume content");
        break;
    default:
        console.log("Triel User");
        break;
}