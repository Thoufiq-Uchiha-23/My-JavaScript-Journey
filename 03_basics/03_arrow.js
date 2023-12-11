const user = {
    username: "thoufiq",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

console.log(this);

// function chai(){
//     let username = "thoufiq"
//     console.log(this.username);//undefined
//     //Reason: cause "this" function only work on objects not on function
// }

// chai()

// const chai = function(){
//     let username = "thoufiq"
//     console.log(this.username);//undefined
// }

//ARROW FUNCTION
// const chai = () => {
//         let username = "thoufiq"
//         console.log(this.username);//undefined
//     }

// chai()

// () => {}
//Basic Arrow Function aka Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// When we use curly braces then we need to use "return" else if we use paranthesis then we shouldn't use "return"
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "thoufiq"});


console.log(addTwo(3, 4));