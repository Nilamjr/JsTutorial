console.log("This is tutorial 30");

const proto = {
    slogan: function(){
        return `this it the best thing to do`; 
    },
    changeName: function(changeName){
        this.name = changeName
    }
}

// create objecr as nilamName
// const nilamName = Object.create(proto);
// nilamName.name = "Parth";
// nilamName.occupation = "WebDesigner";
// nilamName.changeName("P");
// console.log("Nilam Name", nilamName);

// Also create objecr as nilamName and work same as above
// let nilam1 = Object.create(proto, {
//     name: {value:'Parth Shah', writable: true},
//     role: {value:'Webdesigner'}
// }) 

// nilam1.changeName("P Shah");
// console.log("Nilam Here", nilam1);

// function Employee(name, salary, experience){
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }

// Employee.prototype.slogan = function(){
//     return `this is the best work. Regards ${this.name}`;     
// }

// const nEmployee = new Employee("NR", 500000, 3);

// console.log("FOr check constructor",nEmployee);
// console.log(nEmployee.slogan());

// function Programmer(name, salary, experience, language){
//     Employee.call(this, name, salary, experience);
//     this.language = language
// }
// Programmer.prototype = Object.create(Employee.prototype);
// let pName = new Programmer("PS", 20000, 1, "Javascript");

// Programmer.prototype.consrtuctor = Programmer;

// console.log(pName);
// console.log(pName.slogan());


// Flour constructor

function Flour(egg,bakingpowder,whitesugar){
    this.egg=egg;
    this.bakingpowder=bakingpowder;
    this.whitesugar=whitesugar;
}

// Slogan

Flour.prototype.slogan= function(){
    return `This cake is the best`;
}

// Create an object from this constructor now
let make= new Flour(2, 500, 7);
console.log(make.slogan());

// Cake

function Cake(egg, bakingpowder, whitesugar, water, oven){
    Flour.call(this, egg, bakingpowder, whitesugar);
    this.water=water;
    this.oven=oven;
}

// Inherit the prototype
Cake.prototype= Object.create(Flour.prototype);

// Manually set the constructor

Cake.prototype.constructor= Cake;

let cook = new Cake(4, 500, 7, 500, 15);
console.log(cook);