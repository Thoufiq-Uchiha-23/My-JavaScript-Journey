// Prototype
// let myName = "thoufiq"

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}
// here we are making every object present available with thoufiq()
Object.prototype.thoufiq = function(){
    console.log("thoufiq is present in all objects");
}

// Now giving Power to Array
Array.prototype.heyThoufiq = function(){
    console.log(`Thoufiq says Hello to Hitesh Sir, also thanking them`);
}

// heroPower.thoufiq();
// myHeros.thoufiq();
// myHeros.heyThoufiq();
// heroPower.heyThoufiq();

// Inheritance

const User = {
    naem: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment', 
    fullTime: true,
    // proto is just like spread operator which copies the data
    __proto__: TeachingSupport
}

// Here inheriting properties from User to Teacher 
Teacher.__proto__ = User;

// Btw the above method using proto is Old Method
// below is the new method

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()