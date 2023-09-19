let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023,8,19);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate2 = new Date('2023-09-19');
// console.log(myCreatedDate2.toDateString());
// let myCreatedDate3 = new Date('09-19-2023');
// console.log(myCreatedDate3.toDateString());

console.log(myCreatedDate.getTime());
let myTimeStamp = Date.now();
console.log(myTimeStamp);