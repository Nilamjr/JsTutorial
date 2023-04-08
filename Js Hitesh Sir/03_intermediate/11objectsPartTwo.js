var user = {
    firstName: "Nilam",
    lastName: "Rakholiya",
    role:"Developer",
    loginCount: 2,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
    info: function(firstName, lastName, role, loginCount){
     firstName = this.firstName;
     lastName = this.lastName;
     role = this.role;
     loginCount = this.loginCount;
    }
};

let courseList = false;
// console.log(user.firstName);
// console.log("Buy Course",user.buyCourse());
// console.log(user.getCourseCount());
// console.log(user.buyCourse("React Js Course"));
// console.log(user.getCourseCount());
// console.log(user.buyCourse("Angular Course"));
// console.log(user.getCourseCount());

console.log(user.info('Nil','Viroja','Student','3'));