
function sayMyName(){
    console.log("T");
    console.log("H");
    console.log("O");
    console.log("U");
    console.log("F");
    console.log("I");
    console.log("Q");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserrMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserrMessage("Thoufiq"))//Thoufiq just logged in
// console.log(loginUserrMessage())//undefined just logged in
//NOTE: when we don't pass anything then we get value as undefined

//Functions with Objects and Arrays


//for passing one element
// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));

//Using rest/spread operator, this makes bundle of array
// Example 1
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 2000));//[ 200, 400, 2000 ]

//Example 2
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));//[ 500, 2000 ]


// Functions with Objects
const user = {
    username: "thoufiq",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}


// handleObject(user)//Username is thoufiq and price is 199
// handleObject({
//     username: "sam",
//     price: 399
// })//Username is sam and price is 399

// ++++++++++++++Functions with Arrays+++++++++++++
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 1000]));//400