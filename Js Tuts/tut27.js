console.log("This is tutorial 27");

let car = {
    name:"Maruti 800",
    increaseSpeed: 80,
    run: function(){
        console.log("Car is running");
    }
}
console.log(car);

// Constructor 

function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(` ${this.name} is running`);
    }
    this.analyze = function(){
        console.log(` this car is slower by ${200 - this.speed}km/H than Mercedes`);
    }
}

car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Alto', 60);
console.log(car1);
console.log(car2);
