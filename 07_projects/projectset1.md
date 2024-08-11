project links: [hihihi](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 


## project-1

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


//console.log(buttons)

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function (event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
  })

})

```

## project-2

const forms = document.querySelector('form');

//console.log(forms)
forms.addEventListener('submit', function(event) {
event.preventDefault(); // iska kya kaam hai janna hai

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'please enter valid height'
  } else
  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'please enter valid weight'
  } else{
    bmi = (weight/((height*height)/10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`

  }
})

```

##project-3


const clock = document.getElementById('clock')
// console.log(clock)



//let date = new Date();
// let time = Math.round(date.getTime(toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}))); iska koi matlab nahi hai
// console.log(time)

// console.log(date.toLocaleTimeString()) i can use that but har bar refresh karna padega time dekhne ke liye

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)



```
## project-6
//generate random colour this could be done by using hex code

// console.log()

const randomColour = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let clickButton;
// console.log(randomColour());
// yaha if lagakar pahle click button hai ki ni hai check ye ek acchi cheej hai
const startChangingColor = function(){
  const changeColor = function() {document.body.style.backgroundColor = randomColour();
  }
 clickButton = setInterval(changeColor, 1000);
 // we need to write method in this interwal means a fuction 
 
}

const stopChangingColor = function(){
  //document.body.style.backgroundColor = randomColour();
  clearInterval(clickButton);
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)