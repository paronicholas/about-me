'use strict';

// global variables
var questionArray = [
  'Is my favorite color #201d57?',
  'Is my favorite food topping Vermont maple syrup?',
  'Is my least favorite board game Settlers of Catan?',
  'Is my favorite pet a dog?',
  'Is my favorite music genre Metal?'
];

var answersCorrect = [
  'My new favorite color is #201d57',
  'That\'s definitely the right choice, Vermont maple syrup is the best!',
  'Catan is the best board game. Hands down, no questions asked',
  'Dog\'s are the best!',
  'Rock on my friend, rock on!'
];

var answersIncorrect = [
  'I hate you we aren\'t friends anymore',
  'You\'re wrong and should rethink your life choices',
  'You should have better taste in board games',
  'You should really consider getting a dog',
  'You should be rocking a little harder'
];

var htmlOutputClasses = [
  'colorRes',
  'toppingRes',
  'gameRes',
  'petRes',
  'musicRes'
];

// Welcome message
alert('Welcome to the guessing game, please answer with yes/y or no/n');

// question loop
for(var i=0; i < questionArray.length; i++){
  do{
    var answer = prompt(questionArray[i]).toLowerCase();
    console.log('Question ' + i + ' : ' + answer); // displays array index
  } while(answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n');

  switch(i){
  case 0:case 1:case 3:case 4:
    if(answer === 'yes' || answer === 'y') {
      alert(answersCorrect[i]);
    } else {
      alert(answersIncorrect[i]);
    }
    break;

  case 2:
    if(answer === 'no' || answer === 'n') {
      alert(answersCorrect[i]);
    } else {
      alert(answersIncorrect[i]);
    }
    break;

  default:
    break;
  }

  document.getElementById(htmlOutputClasses[i]).textContent = answer;
}
