// getOwnPropertyDescriptor()
/*
This is a method which also shows other properties of Object which is Hidden
*/

// We are not able to change the Property as it's constant
// console.log(Math.PI);//3.141592653589793
// Math.PI = 5
// console.log(Math.PI);//3.141592653589793

// but we can change it from below method

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

// console.log(chai);
//{ name: 'ginger chai', price: 250, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Now here we got all the hidden properties of name,
// present inside the chai object
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Now How to Change/Override those properties?
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// // Now check what output u get
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// for (let [key, value] of chai) {
//     console.log(`${key}, ${value}`);    
// }

// But the above code doesn't work as it's can't be accessed directly
// So we use Object.entries(chai)
for (let [key, value] of Object.entries(chai)) {
    console.log(`${key}, ${value}`);    
}

/*
name, ginger chai
price, 250
isAvailable, true
*/