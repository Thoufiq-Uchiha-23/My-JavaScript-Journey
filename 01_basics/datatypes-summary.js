//Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null //output datatype as object, as null is also unique
let useEmail;//undefined dtype
//to define the value as unique, to variable which is not shared with anyone or equal
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false, as they are not same, but unique

//BigInt
const bigNumber = 3528356196500655n

//Reference (Non Primitive)

//Arrays, Objects, Functions
// NOTE: Here Arrays: object data type,O/P:typeof <object> 
//            Objects: object data type, O/P:typeof <object>
//            Function: object of function data type, O/P:typeof <function>
//Arrays
const heroes = ["shaktiman", "naagraj", "doga"]

//Objects
let myObj = {
    name: "thoufiq",
    age: 22,

}

//functions

let myFunction = function(){
    console.log("Hello World");
}


console.log("Outside Temp: "+typeof outsideTemp);
console.log("Logged In :" + typeof isLoggedIn);
console.log("Arrays: "+typeof heroes);
console.log("Object: "+ typeof myObj);
console.log(" Function:"+ typeof myFunction);

// ***********************************************

// Stack (Primitive), Heap (Non- Primitive)

let myYoutubename = "Thou-jo Satoru"

let anothername = myYoutubename

anothername = "Coffee with Thoufiq"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);