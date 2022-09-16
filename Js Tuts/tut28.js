console.log("This is tutorial 28");

let obj = {
    name: "Nilam",
    channel: "Nilam's Channel",
    address: "Surat"
}

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name = newName;
}

obj2 = new Obj("Nilam");

console.log("Its Only obj",obj);
console.log("Its obj2", obj2);