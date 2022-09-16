// 29th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 31   Confusing part of this keyword

console.log(this);

var user = {
    firstName: "Nilam",
    courseCount: 4,
    getCourse: function(){
        console.log('LINE 7',this);

        function sayHello(){
            console.log("Hello");
            console.log("LINE  16", this);
        }

        sayHello();
    }
}

user.getCourse();
