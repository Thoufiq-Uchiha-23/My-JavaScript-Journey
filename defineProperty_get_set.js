// This is just the old way of using getters and setters
// Using function

// In modern way we use class concepts to define them

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const biryani = new User("thoufiq@thoufiq.com", "mutton_biryani")

console.log(biryani.email);//THOUFIQ@THOUFIQ.COM
console.log(biryani.password);//MUTTON_BIRYANI