const User = {
    _email: 't@mti.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}

const saudi_kabsa = Object.create(User);
console.log(saudi_kabsa.email);