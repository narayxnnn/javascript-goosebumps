// ye Object.defineProperty se bhi purani method hai

const User = {
    _email: 'h@hc.com', // yaha _ ek privet prop ko darshata hai
    
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);