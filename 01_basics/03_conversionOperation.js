let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

//for conversion use teh first alphabet as capital
let valueInNumber = Number(score)

//console.log(typeof(valueInNumber));//gives number type even if its Not, but it's not his true value
//console.log(valueInNumber); //NaN -Not a Number as it has alphabets too

//"33" => 3
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

//1=> true; 0 => false
// "" => false -> if empty
// "hitesh" => true -> if full/not empty

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *****************************OPERATIONS****************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " thoufiq"

let str3 = str1 +str2
//console.log(str3);

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32

//this all are executing based on Ecmascript standards so can't do anything take is as a rule/guidline
//taken from "tc39.es" web doc

// console.log(+true); //Bad Practice
// console.log(+"");   //Bad Practice

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //Bad Practice don't be oversmart cause the company appreciates readability,
// of your code not it's complex logic 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);


