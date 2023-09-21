// +++++++++++= Global Scope and Block Scope++++++++
let a = 10
const b = 30
var c = 4
if(true){
    let a = 1
    const b = 3
    var c = 20

    // console.log("Inner A: ",a);
    // console.log("Inner B: ",b);
    // console.log("Inner C:",c)
}


// console.log("Outer A:",a);
// console.log("Outer B:",b);
// console.log("Outer C:",c);

// +++++++++++ Nested Scope ++++++++++

function one(){
    const username = "arnab"

    function two(){
        const website = "w33school.com"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if(false){
    const username = "arnab"
    if(username === "arnab"){
        const website = "w3school.com"

        console.log(username,website);
    }
}

//+++++++++ hoisting +++++++++++
greet1()
function greet1(){
    console.log("Hi Arnab!!!! Good Morning");
}

// greet2()  // Function expression and class expression are not hoisted 
const greet2 = function(){
    console.log("Hi Arnab!!! Good Afternoon");
}

greet2()