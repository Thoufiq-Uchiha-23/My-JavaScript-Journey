// Immediately Invoked Function Expressions (IIFE)
//This is a function which is used to execute then and there itself
// By Deftn, if a function executes immediately, also which reduces pollution of global scope
// is known as IIFE
//To reduce the global scope pollution
// SYNTAX: ()()
// SYNTAX BREAKDOWN
// (in here we wrap the function)(here this is just for execution)
// Refer eg below
// Normal Function
// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

// IIFE Function
// Refer the SYNTAX ()()
(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})();
// semicolon is important otherwise it'll create problem as error

// Also using arrow function
( ()=>{
    console.log('DB CONNECTED TWO');
})();

// Now to pass parameters with values, Follow below, Line 30 has the parameter, Line 32 has the value
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('thoufiq');