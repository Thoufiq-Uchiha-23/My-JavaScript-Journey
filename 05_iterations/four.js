// for in Loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

// We use for-in to iterate through objects 
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// OUTPUT:
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//   console.log(key);
}

for (const key in programming) {
//   console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//Don't apply for-in loop on Map cause it's not going to execute, as it's not iterable as Arrays & Objects
// for (const key in map) {
//     console.log(key);
// }