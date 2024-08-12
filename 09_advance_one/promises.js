// promises basically objects hote hai so they can be created by new promise() wala method
// and we do async tasks here
// here () ke andar hum callback use karte hai or uske andar 2 methods hote hai resolve() and reject()

const promiseOne = new Promise(function(resolve, reject){
    // db calls, cryptography
       setTimeout(function(){console.log("async task is complete")
        resolve()   // now then will give result
    
       }, 1000) //yaha ye task to complete ho jayega but then wala nahi kyuki vo resolve se connected hota hai
    });  

promiseOne.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "chai", email: "chai@example.com"})
  }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username: "cheeti", password: "123"})
    } else{
        reject('ERROR: somthing is wrong')
    }
  }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("kuch to hua hai")
})

// here we will learn async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true;
      if(!error){
          resolve({username: "bablu", password: "123"})
      } else{
          reject('ERROR: bablu is wrong')
      }
    }, 1000)
  })

async function consumePromiseFive() {
    try{
        const response = await promiseFive;
    console.log(response)
    } catch(error){
        console.log(error);
        
    }
}

consumePromiseFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.