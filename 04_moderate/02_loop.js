// ++++++++ for Loop ++++++++++
let num = 10
for (let i = 1; i <= num; i++) {
//    console.log(i); 
}

for(let i = 1;i<5;i++){//outer loop
    // console.log(`outer loop ${i}`);
    for(let j=0;j<=i;j++){ // inner loop
        // console.log(`${i} : ${j}`);
    }
}

for(let i=1;i<=10;i++){
    // console.log(`\nTable of ${i}\n`);
    for(let j=1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


let heros = ["batman","superman","ironman","hulk","thor"]
for(let i=0;i<heros.length;i++){
    let element = heros[i]
    // console.log(element);
}


// ++++++++ forEach Loop ++++++

heros.forEach(element => {
    // console.log(element);
});

//++++++ break and continue++++++++
for(let i=1;i<=10;i++){
    if(i===5){
        // console.log(`5 value detected`);
        break;
    }
    // console.log(`the index value is ${i}`);
}

// console.log(`\n\n`);
for(let i=1;i<=10;i++){
    if(i===5){
        // console.log("5 is the best value");
        continue;
    }
    // console.log(`the index value is ${i}`);
}

//+++++++++++ while and do while loop ++++++++++++
let i=1
while(i<=10){
    // console.log(i);
    i++
}

let j =10
while(j>=1){
    // console.log(j)
    j--
}

let m = 0
while(m<heros.length){
    // console.log(heros[m]);
    m++
}

let k =10
do{
    console.log(k);
    k++
}while(k<10)// condition is always false but at least one time loop will be executed 


