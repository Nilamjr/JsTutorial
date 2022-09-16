// const convertToRs = (dollar) => dollar * 64;

// const myValue = convertToRs('five');

// console.log(myValue);

const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 64;
    }else{
        throw Error('Amounts to be in number');
    }
}
// console.log(convertToRs('five'));
// console.log("This is not run if program crases");

try{
    console.log(convertToRs('five'));
}catch(error){
    console.log(error);
}

console.log("This is not run if program crases");