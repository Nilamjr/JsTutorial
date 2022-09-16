// 26th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 24 - Object


var user = {
    firstName:"Nilam",
    lastName:"Choudhary",
    role:"User",
    loginCount: 43,
    facebookLogin: true
} 

user.lastName = "Rakholiya";

// console.log(user.firstName);
// console.log(user["lastName"]);
// console.table(user);

var mobile = {
    model:"iPhone11",
    capacity: "64GB",
    color:"blue",
    chip:"Bionic chip",
    camera:"12MP Ultra Wide"
}

// console.log(mobile);
// console.table(mobile);


var myYoutubeVideo = {
    title: "Js Course",
    author: "Nilam",
    videoTime: 10,
    videoDescription: "Video description is here"
}

// console.log(myYoutubeVideo);

// console.table(myYoutubeVideo);
// console.log(`Hey its New video with ${myYoutubeVideo.title} by ${myYoutubeVideo.author}`);


var myJsCourse = {
    name: "Js Course",
    price: 299,
    author: "Nilam",
    description: "Its new Course for begginer as well as experienced one",
}

console.log(`Its New ${myJsCourse.name} at ${myJsCourse.price} by ${myJsCourse.author} and here ${myJsCourse.description}`);

