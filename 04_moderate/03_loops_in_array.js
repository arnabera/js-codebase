//+++++++++++ forof loop +++++++++
const items = ["laptop","ipad","iphone","earbuds"]
for (const item of items) {
    // console.log(`${item}`);
}

const greetings = "hello arnab"
for(const char of greetings){
    // console.log(`each char is ${char}`);
}

//maps 
const map = new Map();
map.set("IN","India")
map.set('USA','United states of America')
map.set('Fr','France')

// console.log(map)
for (const key of map){
    // console.log(key); // it will print array of each key-value pair
}

for (const [key,value] of map){
    // console.log(`${key} :- ${value}`);
}

const myObj = {
    game : "COD",
    game2 : "NFS",
    game3: "BGMI"
}

// for(const [key,value] of myObj){
//     console.log(`${key} :- ${value}`);
// } // for object this type of syntax is not applicable 

//++++++++++++++ forin loop+++++++++
const myObject = {
    marvel : "ironman",
    dc : "superman",
    greengold : "chhota bheem"
}

for (const key in myObject) {
//    console.log(`${key} superhero is ${myObject[key]}`);
}

const myArr = ["js",'rubp','python','cpp']
for(const key in myArr){
    // console.log(`${key} value is ${myArr[key]}`);
}

//Note : we cannot use forin loop in maps


//++++++++++ foreach loop ++++++++++
const languages = ["js",'rubp','python','cpp']

// languages.forEach(function(item){
//     console.log(item)
// });

languages.forEach((element,index,arr) => {
    // console.log(element,index,arr);
});


// function printItems(item){
//     console.log(item);
// }

// languages.forEach(printItems)

// +++++++++++++ Interesting +++++++++

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "C Plus Plus",
        languageFileName : "cpp"
    },
    {
        languageName : "JavaScript Object notation",
        languageFileName : "JSON"
    }
]

myCoding.forEach(item=>{
    console.log(item.languageName);
})