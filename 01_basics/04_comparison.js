// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);//true
// console.log("02" > 1);//true

// console.log(null > 0);//false
// console.log(null == 0);//false
//console.log(null >= 0);//true


/*
Reason: teh reason is taht an equality check == and comparisons ><>=<= work differently
Comparisons convert null to a number, treating it as 0.
That's why (3) null >=0 is true and (1) null > 0 is false
*/

// console.log(undefined == 0);//false
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false

//NOTE : Don't do shit comparison from Line 7 to 24, avoid as much as u can
//Clean code is the AIM, so give priority to that

//strict check ---> === , which is triple equals,
//this doesn't check only values also datatypes

console.log("2" == 2);//gives true, by doing conversion
console.log("2" === 2);//gives false, as it doesn't do conversion, also the datatypes not match