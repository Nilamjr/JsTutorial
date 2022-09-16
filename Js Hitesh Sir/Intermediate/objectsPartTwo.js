// 28th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s old js course 

// Episode 24 - Object


var user = {
    firstName: "Nilam",
    lastName: "Rakholiya",  
    role: "user",
    loginCount: 43,
    faceBookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourse: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`
    },
    info: function(){
        return `${this.firstName} ${this.lastName} is an ${this.role} who is Logged in 
                ${this.loginCount} times.
                ${this.getCourse()} course.
        `
    }
}   
console.log(user.buyCourse('Js Course'));
console.log(user.info());
var courseList = true;
// console.log(courseList);
// console.log(user.firstName);
// courseList.push('Js Course');
// console.log(user.courseList);
// console.log(user);
// console.log(user.getCourse());
// console.log(user.buyCourse('Js Course'));
// console.log(user.getCourse());
// console.log(user.buyCourse('C Language course'));
// console.log(user.getCourse());
