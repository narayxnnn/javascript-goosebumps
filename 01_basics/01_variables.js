const accountId = 111222
let accountEmail = 'narayan@hc.com'
var accountPwd = "121212"
accounCity = "gwl"

// value inside const cant be chaged

accountEmail = "sempu@hc.com"
accountPwd = "098765"
accounCity = "sjp"
console.log(accountId);

console.table([accountId, accountEmail, accountPwd, accounCity]);

/*
prefer not to use var coz it creates problem in block scope and functional scope
*/

