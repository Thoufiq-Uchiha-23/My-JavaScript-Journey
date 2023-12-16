// Reduce method in JavaScript:
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of 
//the array, in order, passing in the return value from the calculation on the preceding element. The final result 
//of running the reducer across all elements of the array is a single value

// Eg from MDN
/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
*/

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

// Using regular function
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)
/*
acc: 3 and currval: 1
acc: 4 and currval: 2
acc: 6 and currval: 3
9
*/

// Using Arrow Function
// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 9999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
    
console.log(priceToPay);//26996