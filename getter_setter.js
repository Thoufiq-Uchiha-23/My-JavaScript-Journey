class User{
    constructor(email, password){
        this.email =email;
        this.password = password;
    }

    // getters and setters are used for encryption purpose
    // they can only be defined in class
    // getters: get property_name(){}
    // setters: set property_name(){}
    // NOTE: setters never 'return' like getters
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}thoufiq`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

}

const thoufiq = new User("thoufiq@google.in", "abc")
console.log(thoufiq.password);
console.log(thoufiq.email);