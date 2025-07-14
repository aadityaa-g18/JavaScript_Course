const accountID = 144553
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState // undefined

// accountID = 2  --> not allowed

accountEmail = "ag@ag.com"
accountPassword = "121212"
accountCity = "Kolkata"

console.log(accountID);

/*
prefer not to use var
beacuse of the issue of block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])