//Discount = ((listing price - selling price) / listing price)*100;

var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice - sellingPrice) / listingPrice)*100;
console.log(discountPercentage);
displayDiscountPercentage = Math.round(discountPercentage);
// console.log(displayDiscountPercentage + "% of");
var results = listingPrice > sellingPrice;
// console.log(typeof results);

/* 
    Type Conversion and coersion
*/

let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1,23,45,3,7]);
// console.log(arr.length, (typeof arr));

let i = 8;
// console.log(i);
// console.log(i.toString());

let j = true;
// console.log(j);
// console.log(j.toString());

let arr1 = [3,6,2,7,9,1];
// console.log(arr1, (typeof arr1));
arr1 = Number([3,6,2,7,9,1]);
// console.log(arr1, (typeof arr1));

let strrr = 'Nilam';
// console.log(strrr, (typeof strrr));
strrr = Number('Nilam');
// console.log(strrr, (typeof strrr));

let n = '34';
// console.log(n , (typeof n));
n = Number('34.45');
// console.log(n , (typeof n));
n = parseInt('34.4');
// console.log(n , (typeof n));

// Type Coersion

let mystr = '3456';
let myNum = 53;

console.log(mystr + myNum);


