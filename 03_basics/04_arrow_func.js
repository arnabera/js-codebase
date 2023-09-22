// Arrow function with explicit return
const addTwoNum = (num1, num2)=>{
    return num1+num2
}

console.log(addTwoNum(5,6))

// Arrow function with implicit return
const subTwoNum= (num1,num2)=> num1-num2
console.log(subTwoNum(10,5));

//implicit return is very useful for retuning an object
const  objReturn= ()=> ({name:"arnab"})
console.log(objReturn());

// +++++++ Using of "this" keyword
const course = {
    userName : "arnab",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hi ${this.userName} , welcome to this course`);
        console.log(this); // this always refer current context
    }
}

// course.welcomeMessage()
// course.userName = "arup"
// course.welcomeMessage()

// console.log(this); 
/* NOTE: in node standalone "this" always refer an empty object but in the browser "this" keyword always refer the "window" object and this is the parent of all object */


function greetings(){
    console.log(this)
}

function greetings2(){
    const userName = "Arnab Bera"
    console.log(this.userName)
}

const greetings3= ()=>{
    const userName = "Arnab Bera"
    console.log(this.userName)
}

const greetings4= ()=>{
    console.log(this)
}

// greetings() 
// greetings2() // it will print "undefined"
// greetings3() // it will also print "undefined"
// greetings4()

