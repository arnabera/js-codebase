let name = "arnab" // declaration of string 
let repo = 50

// console.log("your name is "+name + " and repo count is "+repo); // this is not a good practice 
// usually we use string interpollation

// console.log(`Your name is ${name} and repo count is ${repo}`);

// we can also declare string as object
let naam = new String("ArnabBera")
// console.log(naam.__proto__);

// ########### string methos ########

// console.log(naam.length);
// console.log(naam.toLocaleUpperCase())
// console.log(naam.indexOf('b'))
// console.log(naam.charAt(2));

let village = "   dewanchakchoka   "
// console.log(village.trim());
let newString = naam.substring(0,8)
console.log(newString);

let otherString = naam.slice(-2,9)
console.log(otherString);
console.log(village.replace('choka','chowka').trim());

let biodata = "Arnab Bera Dewanchak Chowka Ghatal PaschimMedinipur"
console.log(biodata.includes('Chowka'));
console.log(biodata.split(" "));