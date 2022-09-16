console.log('its loop section');

// for(let i=0; i<100; i++){
//     console.log(i);
// }

// let j = 450;
// while (j < 100) {
//     console.log("count", j);
//     j++;
//     console.log("New Count", j);
// }

// let k = 0;
// do {
//     if(k===5){
//         break;
//     }
//     console.log("Number", k);
//     k++;
// } while(k < 10);

// console.log("Done");


// let k = 0;
// do {
//     if(k===5){
//         k++;
//         continue;
//     }
//     console.log("Number", k);
//     k++;
// } while(k < 10);

// console.log("Done");


const arr = [3, 4, 5, 7, 1, 12];
// for(let i = 0; i<arr.length; i++){
//     // console.log(arr[i]);
//     const element = arr[i];
//     console.log("Element", element);
// }

// arr.forEach(function(element, index, array){
//     console.log("For Each Element", element, index, array);
// });

// let obj = {
//     fName : 'Nilam',
//     lName : 'Rakholiya',
//     Occupation: 'Web Developer',
//     Language: 'JavaScript'   
// }

// for(let key in obj){
//     // console.log(key);
//     // console.log(obj[key]);   
//     // console.log(`The ${key} of object is ${obj[key]}` ); 
// }
// let n = 10 ;
// while(n<100){
   
//     n += 10;
//     console.log("its n",n);
// }


// let k = 0;
// do{
//     if(k === 5){
//         break;
//     }
//     k++;
//     console.log("", k);


// }while(k < 10);


// let k = 0;
// do{
//     if(k === 5){
//         k++;
//         continue;
//     }
//     k++;
//     console.log("", k);


// }while(k < 10);

let obj = {
    fname:'YOu',
    age:27,
    os:'Language',
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}