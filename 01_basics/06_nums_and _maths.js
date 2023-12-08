// +++++++++++++++++++++++++ Numbers  +++++++++++++++++++++++++++++++++

const score = 400
// console.log(score);


//in JS datatypes can be defined exclusively, using new keyword
const balance = new  Number(100)
// console.log(balance);

//conversion to String datatype
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance.toString());
//this is for precision value for after the decimal points 
// console.log(balance.toFixed(1));

const otherNumber = 23.8966
//this is to give the precision where it round-off the no# and gives in rounded or exponential form
// console.log(otherNumber.toPrecision(3));//23.8966 => 23.9 ; rounded to 3 digits


const hundreds = 1000000
//this is used to make put commas to represent in readable no# system like 100000 => 1,00,000
// console.log(hundreds.toLocaleString('en-IN'));//also can specify the number system standards

//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++ 

console.log(Math);//OTUPUT : Object [Math] {}
// whether +ve or -ve always gives POSTIVE value
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
//ceil and floor
//ceil - always takes high value so called ceiling
//floor - always takes lower value so called floor

// console.log(Math.ceil(4.9));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4, 2, 6, 8));
// console.log(Math.max(4, 2, 6, 8));


//random no# that ranges from 0--->1
console.log(Math.random());
//to increase place value use multiple of 10's
console.log(Math.random() * 10);
//but we can also get 0.44 so to avoid add 1
console.log(Math.floor(Math.random()*10) + 1);

//but as u know we can see that we are also getting decimal values so to avoid that, see below
const min = 10
const max = 20

//first part: (Math.random() * (max - min + 1) + min)
//this is used for getting random no# then instead of 10 we specify range as (max - min + 1) 
//then to get more than range just adding "min"
//second part:
//now to avoid the decimal values we add floor method outside the first part
console.log(Math.floor(Math.random() * (max - min + 1) + min));