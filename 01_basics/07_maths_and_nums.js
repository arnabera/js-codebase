// Here we will play with numbers and maths methods 

// ++++++++++++  NUMS +++++++++++++
let score = 50
let balance = new Number(400)
// console.log(typeof score);
// console.log(typeof balance);
let newBalance = balance.toString()
// console.log(typeof newBalance);

// console.log(score.toFixed(2));

let gameValue = 23.46647
// console.log(gameValue.toPrecision(3))

let hundreds = 1000000
// console.log(hundreds.toLocaleString()); // it will gave values like USA standards 

// console.log(hundreds.toLocaleString('en-IN')); // it will give values in Indian standards


// ++++++++++++++++ Maths +++++++++++

// console.log(Math);
// console.log(Math.abs(-20))
// console.log(Math.round(44.66));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.max(3,4,5,6,7))
// console.log(Math.min(3,4,5,6,7))

let num = Math.random()
// console.log(num)
// console.log(num*10)
// console.log(Math.floor(num*10)+1)

let min = 10
let max = 50

console.log(Math.floor(num*(max-min+1))+min);

// import formula for random range
// Math.floor(Math.random()*(max-min+1)) + min

