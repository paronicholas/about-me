'use strict';

// global variables
var i;
var tryCounter = 0;
var attemptNum;
var correctCount = 0;
var correctHTML = 'correctRes';
var randomHTML = 'randomRes';
var randomNumber = 'randomNumber';
var stateHTML = 'stateRes';

// question 1-5 arrays
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
  'musicRes',
];

// Welcome message
alert('Welcome to the guessing game, please answer with yes/y or no/n');

// question loop
for(i = 0; i < questionArray.length; i++){
  do{
    var answer = prompt(questionArray[i]).toLowerCase();
    console.log('Question ' + i + ' : ' + answer); // displays array index
  } while(answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n');

  switch(i){
  case 0:case 1:case 3:case 4:
    if(answer === 'yes' || answer === 'y') {
      alert(answersCorrect[i]);
      correctCount++;
    } else {
      alert(answersIncorrect[i]);
    }
    break;

  case 2:
    if(answer === 'no' || answer === 'n') {
      alert(answersCorrect[i]);
      correctCount++;
    } else {
      alert(answersIncorrect[i]);
    }
    break;

  default:
    break;
  }

  document.getElementById(htmlOutputClasses[i]).textContent = answer;
  console.log('Correct count : ' + correctCount);
}


// random number question
var randomNum = Math.floor(Math.random() * 10);
for(tryCounter = 0; tryCounter < 5; tryCounter++){
  attemptNum = tryCounter + 1;
  var ranUserInp = prompt(attemptNum + ' of 5 tries. Guess the random number between 0 and 9:');
  console.log('Guess : ' + ranUserInp);
  console.log('Attempt Number : ' + attemptNum);
  if(ranUserInp > randomNum){
    alert('Too high.');
  } else if(ranUserInp < randomNum){
    alert('Too low.');
  } else{
    alert('You got it!');
    correctCount++;
    break;
  }
}
if(tryCounter === 5){
  document.getElementById(randomHTML).textContent = 'You didn\'t get it!';
} else{
  document.getElementById(randomHTML).textContent = 'You got it!';
}
console.log('Correct count : ' + correctCount);
document.getElementById(randomNumber).textContent = randomNum;


// where have I lived
var whereLived = [
  'VT',
  'PA',
  'AZ',
];

// adding 'loop1:' response sourced from: https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
loop1:
for(tryCounter = 0; tryCounter < 6; tryCounter++){
  attemptNum = tryCounter + 1;
  var livedGuess = prompt(attemptNum + ' of 6 tries. Guess a state I have lived in outside of Washington (use state appbreviations):').toUpperCase();
  console.log('Guess : ' + livedGuess);
  console.log('Attempt Number : ' + attemptNum);
  for(i = 0; i < whereLived.length; i++){
    if(livedGuess === whereLived[i]){
      alert('You got it, great job!');
      correctCount++;
      break loop1;
    }
  }
}
if(tryCounter === 6){
  document.getElementById(stateHTML).textContent = 'You didn\'t get it';
} else{
  document.getElementById(stateHTML).textContent = 'You got it';
}
console.log('Correct count : ' + correctCount);

document.getElementById(correctHTML).textContent = correctCount;
