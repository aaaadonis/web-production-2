let title = document.getElementById('title')
title.innerHTML = "🥠 Your Truth 🥠"

function getFortune() {
  let numElement = O('pickNumber') // get the element
  let num = parseInt(numElement.value) //get its value and
  //convert it to a number
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = 'You will'
  let fortune = O('fortune')
  //in an if/else statement, everything should evaluate to true or false
  //

  if(getFortune){
      document.body.style.backgroundColor = 'white'
      fortune.style.backgroundColor = ''
      fortune.style.fontSize = ''
      fortune.style.fontWeight = ''
      document.body.style.color = 'black'
  }

  if (name) {
    fortuneString += ' be a professor'
  }

  if (num >= 2) {
    fortuneString += ', find true love'
  } else if (num > 0) {i
    fortuneString += ', win great riches'
  } else {
    fortuneString += ', become a pauper'
  }

  switch (num) {
    case 0:
      fortuneString += ', and wander the earth forever'
      title.innerHTML = "You're a Wanderer 🌎"
      break; //this ends execution for this case - if other cases are true and you don't include a break statement, they can get executed too
    case 1:
      fortuneString += ', and develop superpowers'
      title.innerHTML = "You're Strong 💪"
      document.body.style.backgroundColor = 'orange'
      break;     
    case 2:
      fortuneString += ', and end up marooned at sea'
      document.body.style.backgroundColor = 'blue'
      title.innerHTML = "You're a Fish 🐠"
      break;
    case 3:
      fortuneString += ', and catch malaria'
      document.body.style.backgroundColor = 'red'
      title.innerHTML = "You're Sick 🤒"
      break;
    case 4:
      fortuneString += ', and become Poseidon, Emperor of the Seas'
      document.body.style.backgroundColor = 'teal'
      title.innerHTML = "You're a God 🔱"
      break;
    case 5:
      fortuneString += ', and die a horrible death'
      // adding a style in a switch case - dying a horrible death is no fun!
      document.body.style.backgroundColor = 'white'
      title.innerHTML = "🚨 YOU'RE DONE 🚨"
      fortune.style.backgroundColor = 'red'
      fortune.style.fontSize = '24px'
      fortune.style.fontWeight = 'bolder'
      break;
    case 6:
      fortuneString += ', and will eat your favorite food everyday'
      title.innerHTML = "You're Fed 🍔"
      document.body.style.backgroundColor = 'green'
      break;
    case 7:
      fortuneString += ', and become a millionaire next week'
      title.innerHTML = "You're Lucky 🍀"
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      break;

  }
  if (name && num ==3 ) {
    fortuneString += ' and write a lot of code this week'
  }

  if (num == 2 || name) {
    fortuneString += ` and be named ${name}` //everyone named Dave picks 2, that's just a fact.
  }
  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  nameElement.value = ''
}
