// if (/*condition*/ ){code}

// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log(`Welcome to the facebook`);
// }

// Operators: == ,!== ,===(checks values with it's type) ,< ,<= ,> ,>= , && , ||

//++++ nullish Coalescing Operator (??): null undefined 
let val1 ;
// val1 = 5??10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

// if(2=="2"){
//     console.log(`executed`);
// }

// if(2==="2"){
//     console.log(`executed`);
// }



//  let age = 70
// if(age <18){
//     console.log(`you can not drive: you are underage`);
// }else if(age>=18 && age<=60){
//     console.log(`you can drive: no problem`);
// }else{
//     console.log(`you can not drive: you are over aged`)
// }

// ++++++++++++ SWITCH CASE +++++++++++++

// const day = 7
// switch (day) {
//     case 1:
//         console.log(`sunday`);
//         break;
//     case 2:
//         console.log(`monday`);
//         break;
//     case 3:
//         console.log(`tuesday`);
//         break;
//     case 1:
//         console.log(`sunday`);
//         break;
//     case 2:
//         console.log(`monday`);
//         break;
//     case 3:
//         console.log(`tuesday`);
//         break;
//     case 4:
//         console.log(`wednessday`);
//         break;
//     case 5:
//         console.log(`thursday`);
//         break;
//     case 6:
//         console.log(`friday`);
//         break;
//     default:
//         console.log(`saturday`);
//         break;
// }

// +++++++++++++++ TRUTHY  AND FALSY VALUE++++++++++
const userName = "arnab"
// if(userName){
//     console.log(`got user name`);
// }else{
//     console.log(`does not get user name`);
// }

/*  
Falsy Values : false , 0, -0, BigInt 0n , null , undefined ,NaN, "" 

other than all values are truthy values : "0",'false',
" ", [], {}, function(){}
*/

let userMail = []
// if(userMail){
//     console.log(`got the user mail`);
// }else{
//     console.log(`does not get the user mail`);
// }

// if(userMail.length===0){
//     console.log(`does got the user mail`);
// }else{
//     console.log(`get the user mail`);
// }

const user = {}

// if(Object.keys(user).length===0){
//     console.log(`No user found`)
// }else{
//     console.log(`Users found`)
// }


// ++++ ternery operator :=> condition ? statement1 : statment;

const coldCoffeePrice = 100
coldCoffeePrice>=80 ? console.log(`price is greater than 80`):console.log(`price is less than 80`);