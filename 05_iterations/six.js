const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) =>{
//     console.log(item);
//      return item;
// } )
// NOTE : forEach Loop can't return the items
// console.log(values);

const myNums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// As forEach doesn't return any value, instead we can use filter method
// Filter
// const newNums = myNums.filter( (num) => num > 4 )
// Explicit "return" inside scope
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// How to use using forEach loop itself
// const newNums = [];

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// } )
// console.log(newNums);

// Book Example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

let userBooks = books.filter( (bk) => bk.genre === "History" )
// OUTPUT:
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publsih: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publsih: 1986,
//       edition: 1996
//     }
//   ]
// scope is opened, so use return
userBooks = books.filter( (bk) => { return bk.publish >= 2000 } )
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publsih: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publsih: 1986,
//     edition: 1996
//   }
// ]

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
 } )
//  OUTPUT:
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]
console.log(userBooks);
// PRACTICE