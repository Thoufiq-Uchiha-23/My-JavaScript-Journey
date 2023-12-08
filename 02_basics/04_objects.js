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
// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//prints array of keys
// //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//prints array of values
// // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));//prints array of values
// // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//To check if property Exist, we use "hasOwnProperty"
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false

//++++++++++++++++++++++++++Object Destructure++++++++++++++++++++++++++++++++++
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// we can also rename the property name if its big, like below
const {courseInstructor: instructor} = course

// console.log(courseInstructor);//hitesh
// console.log(instructor);//hitesh

//JSON API Intro
//API is nothing but we putting our work on someone's head, how they do or complete is not our responsiblity 
//But what we ask they have to provide
//this just collects the data from backend and give it to us
//like he is the waiter or chef who serves us what food we need

//JSON Looks like
// {
//     "name" : "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Another way API looks like
//just like objects stored in Array
// [
//     {},
//     {},
//     {},
// ]

//this is API of Random User
// {"results":[{"gender":"female","name":{"title":"Ms","first":"Ianthe","last":"Van Hell"},"location":{"street":{"number":7404,"name":"Fraterstraat"},"city":"Sibrandahus","state":"Gelderland","country":"Netherlands","postcode":"1357 GN","coordinates":{"latitude":"31.8882","longitude":"161.8422"},"timezone":{"offset":"-9:00","description":"Alaska"}},"email":"ianthe.vanhell@example.com","login":{"uuid":"6dd1b8c5-64ae-4ce6-9d4a-6b3b11540d90","username":"purplekoala719","password":"doitnow","salt":"rP5W5zw1","md5":"ef4c257020a24a51bdbb98e0c85a7ff4","sha1":"ad5d4620f4419b602524572fb916241d29412c64","sha256":"b5424314fe12d6396a30129fa06c630c552164fe9327b9b364351dd10cc2e3ba"},"dob":{"date":"1956-07-27T16:28:04.434Z","age":67},"registered":{"date":"2016-12-06T01:45:24.134Z","age":7},"phone":"(0243) 888593","cell":"(06) 95826614","id":{"name":"BSN","value":"77512717"},"picture":{"large":"https://randomuser.me/api/portraits/women/10.jpg","medium":"https://randomuser.me/api/portraits/med/women/10.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/10.jpg"},"nat":"NL"}],"info":{"seed":"f77abc95d8eb7d06","results":1,"page":1,"version":"1.4"}}


//To format JSON we use JSON formatter in online where 
// we can represent it in code, tree,and various view