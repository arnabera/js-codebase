// const coding = ["js","cpp","python","java","ruby"]
// const value = coding.forEach(item=>{
//     console.log(item);
//     return item // forEach loop doesnot return anything
// })

// console.log(value);


//++++++++++++++++++++ filter ++++++++++++++++

const myNums = [1,2,3,4,5,6,7,8,9,10]
const result = myNums.filter(item => item>4)
// console.log(result);

const newNums =[]
myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
    }
})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const historyBooks = books.filter((book)=>book.genre==="History")
// console.log(historyBooks);
const publishYear = books.filter((book)=>book.publish>=2000)
// console.log(publishYear);

//++++++++++++ map ++++++++++++++++++

const nums= [1,2,3,4,5,6,7,8,9,10]
const numsArr = nums.map((num)=>num+10)
// console.log(numsArr);


// ++++++++++++++++++++ Chaining +++++++++++++++++++

const numbers = nums.map(items=>items*10).filter(item=>item>=50)
const numbers2 = nums.map(items=>items*10).map(item=>item+1)
// console.log(numbers);
// console.log(numbers2);



//+++++++++++++++++++ reduce ++++++++++++++++++++
const arr = [1,2,3,4]

// const total = arr.reduce(function (acc,curVal){
//     console.log(`accumulator: ${acc} && current Value: ${curVal}`)
//     return acc+curVal
// },0)

const total = arr.reduce((acc,curVal)=>(acc+curVal),0)
// console.log(total);


const shoppingCart = [
    {
        itemName : "laptop",
        price : 10000
    },
    {
        itemName : "iphone",
        price : 5000
    },
    {
        itemName : "ipad",
        price : 5000
    }
]

const totalPrice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice);