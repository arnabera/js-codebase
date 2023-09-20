function greetings(name="user"){
    //  here we are using the defult parameter value
    console.log(`Hi ${name} !! wish you very happy birth day`)
}
// greetings()


// functions have more than two parameter => rest operator

function shoppingCart(item1) {
    return item1
}

// console.log(shoppingCart(200))

function shoppingCart2(val1 ,...items){
    // rest operator wrap the items in an array
    return items
}

// console.log(shoppingCart2(200,300,211,256));

const user ={
    username : "arnab",
    age : 22
}

function objectHandler(myObject){
    console.log(`Hi ${myObject.username} !! are you ${myObject.age} years old`)
}

// objectHandler(user)
objectHandler({
    username : "arnab",
    age : 22
})

const nums = [2,4,5,6]

function arrayHandler(myArr){
    return myArr[1]
}

// console.log(arrayHandler(nums))
console.log(arrayHandler([2,3,4,5]))