const marvel_heros = ["spiderman","thor","ironman"]
const dc_heros =["flash","superman","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // pushing an array into an array create a 2d array
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[2])

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// the easyest and modern way to do this is spred operation 

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const myArr2 = [1,2,3,4,[5,6],5,6,7,[8,[4,5]]]
// console.log(myArr2.flat(Infinity)) 

// console.log(Array.isArray("arnab"))
// console.log(Array.from("arnab"))

// console.log(Array.from({name:"arnab"}))

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))
