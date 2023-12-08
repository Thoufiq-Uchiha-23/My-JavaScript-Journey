const name="thoufiq"
const repoCount = 50


//OLD METHOD using + or ,
// console.log(name + repoCount + " Value");


// NEW METHOD using backticks ` ` , template literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to assign String is

const gameName = new String('hitesh-hc')

console.log(gameName.__proto__);

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
//returns the char based on its index no
console.log(gameName.charAt(2));
//returns index position
console.log(gameName.indexOf('t'));

//this starts from 0 => 3, doesn't include 4 position
const newString = gameName.substring(0, 4)
console.log(newString);

//slice functions => slices the string and also takes neg indexes in reverse order
const anotherString =gameName.slice(-9, 4)
console.log(anotherString);

//Trim and Replace
//trim => cuts the whitespaces
const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());


//replace => replaces the previous value with new value, parameters passed are (search value, replacing value)
const url = "https://thoufiq.com/thoufiq%20uchiha"

console.log(url.replace('%20', '-'));

console.log(url.includes('uchiha'))
console.log(url.includes('sundar'))

//split => takes the char where it splits the content into array
console.log(gameName.split('-'));