//Object Constructor
//Object Singleton

// const tinderUser = new Object()//singleton object
const tinderUser = {}//not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

//Objects in objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Thoufiq",
            lastname: "Izhar"
        }
    }
}
// console.log(regularUser.fullname);//{ userfullname: { firstname: 'Thoufiq', lastname: 'Izhar' } }
// console.log(regularUser.fullname.userfullname);//{ firstname: 'Thoufiq', lastname: 'Izhar' }
// console.log(regularUser.fullname.userfullname.firstname);//Thoufiq

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//SYNTAX:
//const returnedTarget = Object.assign(target, source);
// target: {}
// source: obj1, obj2, obj3,......
// const obj3 = Object.assign({}, obj1, obj2, obj4)//similar to concat of array


//Now using spread operator (THE MODERN WAY)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);
//Output using assign
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//Output using spread
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Array of objects, this method is mostly used while Database operations
const users = 
    [
        {
    id: 1,
    email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com",
    },
    {
    id: 1,
    email: "t@gmail.com"
    }
]

users[1].email
console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));//prints array of keys
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//prints array of values
// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//prints array of values
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//To check if property Exist, we use "hasOwnProperty"
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false
