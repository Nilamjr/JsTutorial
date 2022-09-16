console.log("This is Tutorial31.js");

class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2021 - this.experience; 
    }

    static add(a, b){
        return a + b;
    }
}

class programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenLanguage, githubUser){
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.github = githubUser; 
    }

    favouriteLanguage(){
        if(this.language == 'python'){
            return 'Python';            
        }
        else{
            return 'Javascript';
        }
    }

    static multiply(a, b){
        return a * b;
    }

}

nilam = new Employee("Nilam", 4, "WebDevelopment");
console.log(nilam);
// console.log(nilam.joiningYear());
// console.log("using static method", 4 + 50);

objProg = new programmer('Krishna', 4, 'Bio','Ruby', 'K34');
console.log(objProg);
console.log(objProg.favouriteLanguage());
console.log(programmer.multiply(7,7)); 




