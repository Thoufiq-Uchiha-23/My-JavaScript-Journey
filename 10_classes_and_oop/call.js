// Learning about Call

// function SetUserName(username){
    // complex DB calls
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUserName(username)
    
//     this.email = email;
//     this.password = password;
// }

// const chai= new createUser("chai", "chai@fb.com", "123");
// console.log(chai);
// OUTPUT: createUser { email: 'chai@fb.com', password: '123' }


// Testing whether the child function is called or not
// function SetUserName(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUserName(username)
    
//     this.email = email;
//     this.password = password;
// }

// const chai= new createUser("chai", "chai@fb.com", "123");
// console.log(chai);
// OUTPUT: 
// called
// createUser { email: 'chai@fb.com', password: '123' }

// Using call function
// function SetUserName(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");
// }

// DEFTN:
/*
Calls a method of an object, substituting another object for the current object.

@param thisArg — The object to be used as the current object.

@param argArray — A list of arguments to be passed to the method.
*/
// function createUser(username, email, password){
//     SetUserName.call(username)
    
//     this.email = email;
//     this.password = password;
// }

// const chai= new createUser("chai", "chai@fb.com", "123");
// console.log(chai);
// it is called but the username is still not appearing, as when SetUserName() is 
// called then it's removed from the call stack, which results in 
// not passing to the parent functn
// OUTPUT:
// called
// createUser { email: 'chai@fb.com', password: '123' }

// Using this function
// this function resolves this issue where it stores the value 
// before it's removed from call stack 
function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)
    
    this.email = email;
    this.password = password;
}

const chai= new createUser("chai", "chai@fb.com", "123");
console.log(chai);
// OUTPUT: See now we got the desired output, where username is also present
// called
// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }