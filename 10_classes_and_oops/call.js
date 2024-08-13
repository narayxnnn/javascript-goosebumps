function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //yaha agar call function ni lagaya to to globle exe context mei upar wala function run hoke bahar ho jayega
    //to hamne yaha call function use kiya or this hame is current function ka context de dega
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
