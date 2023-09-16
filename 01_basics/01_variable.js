const accountId = 1234
let accontEmail = "arnab@google.com"
var accountPassword = "bera$1122"
accountCity = "Kolkata"
let accountState;

// accountId = 123  // constant are not changable

/*  
using var is not a good practice 
in var there is no concept of  block scope and function scope
*/
console.log(accountId);
console.table([accountId, accontEmail, accountPassword , accountCity, accountState])