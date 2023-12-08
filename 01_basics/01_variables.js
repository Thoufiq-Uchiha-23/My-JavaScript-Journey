const accountId = 144553
let accountEmail = "thoufiq@google.com"
var accountPassowrd = "12345"
accountCity = "Jaipur"
let accountState;


//accountId = 2 //not allowed

accountEmail = "th@th.com"
accountPassowrd = "212121221"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use varr
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassowrd,accountCity])