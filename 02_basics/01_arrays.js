//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//insert at start
// myArr.shift()//delete at start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();//binds array into string, and also changes the type

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);