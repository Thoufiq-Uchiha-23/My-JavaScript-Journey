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
myHeros.thoufiq();
myHeros.heyThoufiq();
// heroPower.heyThoufiq();

// Inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Ass'
}