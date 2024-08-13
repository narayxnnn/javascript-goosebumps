class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// niche hum class user ko class teacher se connect kar rahe sothat teacher mei user se directly value le sake
class Teacher extends User{ 
    constructor(username, email, password){
        super(username)  // remember we have used call function or usme this wagerah sab likha tha yaha par vo same kam ye 
        //ye super karta hai direclty jo required result upar wale class se lena hai le leta ahai
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe() //coz we are inheriting user into teacher all the method of user will work for teacher but iska ulta nahi ho payega
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);