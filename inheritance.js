class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email= email
        this.password= password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()
// console.log(chai === masalaChai);//false
// to know whether the chai is instance/ object of Teacher and User, 
// we use instanceof keyword 
// console.log(chai instanceof Teacher);//true
// console.log(chai instanceof User);//true