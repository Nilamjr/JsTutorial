// const sayHello = function(name){
//     console.log("hello" + name + "!");
// }

// const sayHello = (name) => {
//   return `hey there ${name}!`
// }
// console.log(sayHello("Nilam"));

// const sayHello = (name) => `hey there ${name}!`;
// console.log(sayHello("Nilam"));

const newTodos = [{
    title:"Go to gym",
    isDone: false,
},{
    title:"Purchase peanut butter",
    isDone: true,
},{
    title:"do Loundry",
    isDone: true
}];

// const thingsDone = newTodos.filter((todo) => {
//     return todo.isDone === true;
// });

// const thingsDone = newTodos.filter((todo) => { return todo.isDone === true; });
// const thingsDone = newTodos.filter((todo) => todo.isDone === true);

// console.log(thingsDone);


const courses = [{
    title: "Javascript",
    isPurchased: true,
},{
    title: "C",
    isPurchased: false,
},{
    title: "Python",
    isPurchased: true,
},{
    title: "Swift",
    isPurchased: true,
},{
    title: "PHP",
    isPurchased: false,
},{
    title: "Java",
    isPurchased: false,
}]


// const notDoneYet = courses.filter( (course) => {
//     if(course.isPurchased === false){
//         return course.title;
//     }
// })

// const notDoneYet = courses.filter( course => course.isPurchased === false ? console.log(course.title): '');
const notDoneYet = courses.filter( course => !course.isPurchased === true ? console.log(course.title): '');
// console.log(notDoneYet);


const cameras = {
    price: 500,
    weight: 2000,
    description: function(){
        return `This canon camera is of ${this.price}$`;
    }
}

console.log(cameras.description());
