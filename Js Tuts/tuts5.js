// type conversion and type coercion

console.time('started time');
console.log("Welcome to the tut5");
let myVar;
myVar = String(34);
// console.log("Myvar",myVar, (typeof myVar));

// let istrue = true;
// console.log(istrue, (typeof istrue));

// let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1,2,3,4]);
// console.log(arr, (typeof arr));
// console.log(arr.length, (typeof arr));

let k = 54;
k.toString();
// console.log(k, "its k", typeof k);

let strToNumb = Number("8358");
strToNumb = Number("835s8");
strToNumb = Number(true);
strToNumb = Number(false);
strToNumb = Number(["s",2,3,4,5,6]);
console.log(strToNumb, "nonono", (typeof strToNumb));

// let parseNumb = Number('56.6');
// console.log(parseNumb.toFixed(43), (typeof parseNumb));

let strCoe = Number('5673');
let numbCoe = 56;

// console.log(strCoe + numbCoe);

let st1TOnum1;
strToNumb = '589';
// console.log("Its String",strToNumb);
st1TOnum1 = Number('589');
// console.log('Its numb', st1TOnum1);

// let numTostr;
// numTostr = 405;
// console.log('its number', numTostr);
// numTostr = String(405);
// console.log(numTostr, (typeof numTostr));

// let boolVar = false;
// boolVar = Number(false);
// console.log(boolVar, (typeof boolVar));

// let boolvar1 = true;
// boolvar1 = Number(true);
// console.log(boolvar1, "is converted to", (typeof boolvar1));

// boolVar = String(false);
// console.log(boolVar, (typeof boolVar));

// let todayDate = new Date();
// console.log(todayDate, "is",  (typeof todayDate));
// todayDate = String(new Date());
// console.log(todayDate, "ïs", (typeof todayDate));
// todayDate = Number(new Date());
// console.log(todayDate, "is" , (typeof todayDate));
// todayDate = Boolean(new Date());
// console.log(todayDate, "is", (typeof todayDate));
// console.log(todayDate);

// let arrCheck = ['new','old','medium'];
// console.log(arrCheck, (typeof arrCheck));
// arrCheck = String(['new','old','medium']);
// console.log(arrCheck, "is type of ", (typeof arrCheck));

// arrCheck = Number(['new','old','medium']);
// console.log(arrCheck, "First Array" ,(typeof arrcheck));

// arrCheck = Number(['new','old','medium']);
// console.log(arrCheck, "Second Array" ,(typeof arrCheck));

let altDigit = 50;
// console.log(altDigit.toString(), (typeof altDigit));

let parsingTheNo = 89;
// console.log(parsingTheNo.toFixed(4), (typeof parsingTheNo));

// console.timeEnd("ended here");

// console.assert(599<119, 'this is not possibkele');
// console.error('its error');