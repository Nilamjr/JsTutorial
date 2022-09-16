// 29th March 2022
// Nilam Practicing JS With you tube channel "Hitesh Chaudhary"'s new js course 

// Episode 30 - For In and for of loop


const names = ["Ama","BharP","Net","MxPl"];

// for(const n of names){
//     console.log(n);
// }

// for checking only
// for(const n in names){
//     console.log(`${names[n]}`);
// }

const symbols = {
    yt: "Youtube",
    ig:"Instagram",
    lco:"LearnCOdeOnline",
    fb: "Facebook"
}

for(const n in symbols){
    console.log(`Key is : ${n} and its valuse is: ${symbols[n]}`);
}