// static keyword is used to stop accessing the function

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const thoufiq = new User("thoufiq")
// console.log(thoufiq.createId())//123

// when set to static this is the output
// TypeError: thoufiq.createId is not a function

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
