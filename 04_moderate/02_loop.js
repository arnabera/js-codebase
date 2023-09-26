// ++++++++ for Loop ++++++++++
let num = 10
for (let i = 1; i <= num; i++) {
//    console.log(i); 
}

for(let i = 1;i<5;i++){//outer loop
    console.log(`outer loop ${i}`);
    for(let j=0;j<=i;j++){ // inner loop
        console.log(`${i} : ${j}`);
    }
}

// ++++++++ forEach Loop ++++++
const array = [1,2,3,4,5,6]
array.forEach(element => {
    // console.log(element);
});


