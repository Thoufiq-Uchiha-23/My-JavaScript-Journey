//Objects can be desscribed in 2 ways

//Literals and Constructors
//singleton
//if we make object using literals then we don't get singleton
//if we make object using Constructors then we get singleton

//Object literals

// const JsUser = {}

const mySym = Symbol("key1");

//NOTE : every key in object behind the scene in considered as string
//so while using 2nd way we make the key to be enclosed in string
const JsUser = {
  name: "Thoufiq",
  "full name": "Thoufiq Uchiha",
  //this is how we declare symbol in objects, important for INTERVIEW perspective
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "thoufiq@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//1st way to Access
// console.log(JsUser.email);//thoufiq@google.com
// //2nd way to Access
// console.log(JsUser["email"]);//thoufiq@google.com
// console.log(JsUser["full name"]);//Thoufiq Uchiha
// console.log(JsUser[mySym]);//mykey1

JsUser.email = "thoufiq@chatgpt.com";
//to freeze perfoming operations on objects we use
// Object.freeze(JsUser) //Now any modification is Freezed, doesn't throw Error but not allows operations
// JsUser.email = "thoufiq@microsoft.com"
console.log(JsUser);
/*OUTPUT we have before freezing
{
  name: 'Thoufiq',
  'full name': 'Thoufiq Uchiha',
  age: 18,
  location: 'Jaipur',
  email: 'thoufiq@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

//In Objects we can also add Functions
JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};
console.log(JsUser.greeting); //[Function (anonymous)]
//But we have to give braces to perform function
console.log(JsUser.greeting()); /*
OUTPUT:
Hello JS User
undefined
*/
console.log(JsUser.greetingTwo()); /*
OUTPUT:
Hello JS User, Thoufiq
undefined
*/
