// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}
// let and const are scope variable
// but var crosses the scope and makes the job tough for engineers, while maintaining the codebase

//  console.log(a);//ReferenceError: a is not defined
//  console.log(b);//ReferenceError: a is not defined
//  console.log(c);//30

function one(){
    const username = "thoufiq"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if(true){
    const username = "thoufiq"
    if(username == "thoufiq"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);//ERROR
}

// console.log(username);//ERROR


//+++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
}

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}
