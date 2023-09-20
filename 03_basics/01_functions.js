// DRY => Don't Repeat Youurself

function greetings(timings){
    console.log(`Hi Arnab! ${timings}`)
}

// greetings("good morning")
// greetings("good evening")

// function addTwoNumber(num1,num2){
//     let result = num1+num2
//     console.log(result)
// }

// addTwoNumber(2,3)
// console.log(addTwoNumber(2,3));

function addTwoNumber(num1,num2){
    let result = num1+num2
    return result
    // console.log("arnab")
}


let result = addTwoNumber(2,3)
// console.log(addTwoNumber(5,6));
// console.log(result);

// function userLogIn(userName){
//     if(userName == undefined){
//         console.log("Please enter a user name!!")
//         return // when function returns nothing it always return "undefined"
//     }
//     return `${userName} ....you are logged in now!!`
// }

function userLogIn(userName){
    if(!userName){
        console.log("Please enter a user name!!")
        return // when function returns nothing it always return "undefined"
    }
    return `${userName} ....you are logged in now!!`
}

console.log(userLogIn())

