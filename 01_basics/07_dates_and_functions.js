// Dates
//dates are also objects
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(`In toDateString : ${myDate.toDateString()}`);
// console.log(`In toISOString : ${myDate.toISOString()}`);
// console.log(`In toJSON : ${myDate.toJSON()}`);
// console.log(`In toLocaleDateString : ${myDate.toLocaleDateString()}`);
// console.log(`In toLocaleString : ${myDate.toLocaleString()}`);
// console.log(`In toLocaleTimeString : ${myDate.toLocaleTimeString()}`);
// console.log(`In toTimeString : ${myDate.toTimeString()}`);
// //date is also an object type
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// months in JS start from 0 not 1, means 0 => JANUARY
//also giving more values means it formats to date, time, standard time etc
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
//putting floor function as the value was appearing in decimal value
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})
