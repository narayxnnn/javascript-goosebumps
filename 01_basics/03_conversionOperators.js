let score = null;

console.log(typeof(score));

let convertedNumber = Number(score);
console.log(convertedNumber);
console.log(typeof(convertedNumber));

// conclusion: if a string contain only no.s then it can be converted totally into number but 
// if it has alphabet too then it will be NaN but its type will be number may its a fault in js
// on converting null into no. it gives zero
//on undefined = NaN
// on boolean values 0 and 1


// boolean conversion
let isLogged = 1;
let boolIsLogged = Boolean(isLogged);  // fuction for converting into boolean
console.log(boolIsLogged);

// in into boolean conversion 1 & 0 into t/f resp...
//on converting into blank string false and w fillled string true


// same for converting into string we use String()