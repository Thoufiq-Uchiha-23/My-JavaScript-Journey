const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes)

//push method
// console.log(marvel_heroes);//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heroes[3][1]);//batman

//concat method
const allHeros = marvel_heroes.concat(dc_heroes);
console.log(allHeros); //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'batman', 'flash' ]

//better and easy method than concat is spread operator

// spread - spreads the element , now it's not array now it is individual element
//just like water glass when spilled it spreads everywhere

const all_new_heros = [...marvel_heroes, ...dc_heroes];

console.log(all_new_heros); //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]];
//flat method makes the nested array to become one array going through diff levels,
// then asking how many levels it should enter we can give no# like 1,2,3, .......Infinity

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//OUTPUT:
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
*/

//Incase while scarping some data from webpage
console.log(Array.isArray("thoufiq"));//confirming it is array or not
//false
console.log(Array.from("thoufiq"));//converting into array
/*
[
  't', 'h', 'o',
  'u', 'f', 'i',
  'q'
]
*/

console.log(Array.from({name: "thoufiq"}));//interesting cause can be asked in INTERVIEW
//this gives an output of empty array [],here we have to divide array into keys array and values array

//another to convert array is "of" method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]