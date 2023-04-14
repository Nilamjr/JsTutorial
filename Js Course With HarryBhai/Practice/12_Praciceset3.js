// Question 1 

let marks = {
    nilam: 96,
    khushal: 89,
    jay: 50,
    Nir: 40
}

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of" + Object.keys(marks)[i] + "are" +  marks(Object.keys(marks)[i]));
}