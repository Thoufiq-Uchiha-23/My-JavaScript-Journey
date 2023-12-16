const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map Function which is better than forEach function
// Map doesn't check, if it's return is true or not, but filter does
// Map performs the operations we command
// const newNumers = myNumers.map( (num) => {return num + 10} )
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

// map chaining, in here the it's like a nested map, in which the above map passes the values to another below map
const newNumers = myNumers
  .map((num) => num * 10) /*
                [
                    10, 20, 30, 40,  50,
                    60, 70, 80, 90, 100
                ]
                */
  .map((num) => num + 1)
  /*
                [
                11, 21, 31, 41,  51,
                61, 71, 81, 91, 101
                ]
                */
  .filter((num) => num >= 40);
/*
                [
                41, 51,  61, 71,
                81, 91, 101
                ]
               */

console.log(newNumers);
