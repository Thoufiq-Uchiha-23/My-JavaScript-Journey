// PROMISES
// In simple words it's just like making Promise 
// we will perform/solve the task or will reject the task  
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() //to connect with 'then' method
    }, 1000)

})

// 'then' supports resolve method
promiseOne.then(function(){
    console.log("Promise consumed");
})
// OUTPUT:
// Async task is complete
// Promise consumed

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

// OUTPUT: 
// Async task 2
// Async 2 resolved

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
// OUTPUT:{ username: 'Chai', email: 'chai@example.com' }

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "Thoufiq", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log('The Promise is either resolved or rejected'))
// OUTPUT: ERROR: Something went wrong(error = true)/by catch
// OUTPUT: Thoufiq(error = false)
// by adding finally
// OUTPUT:
// The Promise is either resolved or rejected

const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// Async Await: this delays the task until the other task has been done
// And will not proceed if the previous task is not complete
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// OUTPUT: ERROR: JS went wrong
consumePromiseFive()

// async await method
// async  function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         // Here the object to be converted into json also takes time so 
//         // we have made it 'await' and then pass it to the variable
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// then and catch method
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))