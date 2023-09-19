// singleton => constructor 

// object lterals 

let mySym = Symbol("myKey1")
const user = {
    name : "Arnab",
    [mySym]:"tere naam",
    "full name" : "Arnab Bera",
    age: 23,
    email : "arnab123@gmail.com",
    isLoggedin: true,
    loggedInDays: ["monday","thursday"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mySym])

// user["full name"] = "Arnab Banerjee"
// Object.freeze(user)
// user.email = "beraarnab123@google.com"
// console.log(user);


user.location = "Kolkata"
// console.log(user);

user.greeting = function(){
    console.log("Hi JS user");
}

user.greetingTwo = function(){
    console.log(`Good afternoon! ${this["full name"]}`);
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingTwo());



