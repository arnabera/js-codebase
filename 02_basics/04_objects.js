// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "arnab"
tinderUser.location = "kolkata"
// console.log(tinderUser);

const regularUser = {
    email : "arnab@google.com",
    fullname :{
        userFullName : {
            first_name: "Arnab",
            middle_name: "kumar",
            last_name : "Bera"
        }
    }
}

// console.log(regularUser.fullname.userFullName.last_name); 

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("location"));


// Object destructuring 
const course = {
    name : "js in hindi",
    price : 999,
    courseInstructor: "arnab"
}

const {courseInstructor : instructor} = course
console.log(instructor);

