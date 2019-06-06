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

/*
question 1-5 arrays
sub arrays are structured:
0 = question, 1 = correct response, 2 = incorrect response, 3 = html id link
*/
var questionAllArray = [
  [
    'Is my favorite color #201d57?',
    'My new favorite color is #201d57',
    'I hate you we aren\'t friends anymore',
    'colorRes'
  ],
  [
    'Is my favorite food topping Vermont maple syrup?',
    'That\'s definitely the right choice, Vermont maple syrup is the best!',
    'You\'re wrong and should rethink your life choices',
    'toppingRes'
  ],
  [
    'Is my least favorite board game Settlers of Catan?',
    'Catan is the best board game. Hands down, no questions asked',
    'You should have better taste in board games',
    'gameRes'
  ],
  [
    'Is my favorite pet a dog?',
    'Dog\'s are the best!',
    'You should really consider getting a dog',
    'petRes'
  ],
  [
    'Is my favorite music genre Metal?',
    'Rock on my friend, rock on!',
    'You should be rocking a little harder',
    'musicRes'
  ]
];

// Welcome message
alert('Welcome to the guessing game, please answer with yes/y or no/n');

// question loop
for(i = 0; i < questionAllArray.length; i++){
  do{
    var answer = prompt(questionAllArray[i][0]).toLowerCase();
    console.log('Question ' + i + ' : ' + answer); // displays array index
  } while(answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n');

  switch(i){
  case 0:case 1:case 3:case 4:
    if(answer === 'yes' || answer === 'y') {
      alert(questionAllArray[i][1]);
      correctCount++;
    } else {
      alert(questionAllArray[i][2]);
    }
    break;

  case 2:
    if(answer === 'no' || answer === 'n') {
      alert(questionAllArray[i][1]);
      correctCount++;
    } else {
      alert(questionAllArray[i][2]);
    }
    break;

  default:
    break;
  }

  document.getElementById(questionAllArray[i][3]).textContent = answer;
  console.log('Correct count : ' + correctCount);
}


// random number question
var randomNum = Math.floor(Math.random() * 10);
console.log('Random number : ' + randomNum + ' is a ' + typeof randomNum);
for(tryCounter = 0; tryCounter < 5; tryCounter++){
  attemptNum = tryCounter + 1;
  var ranUserInp = parseInt(prompt(attemptNum + ' of 5 tries. Guess the random number between 0 and 9:'));
  console.log('User input is : ' + ranUserInp + ' and is a ' + typeof ranUserInp);
  console.log('Attempt Number : ' + attemptNum);

  if(ranUserInp === randomNum){
    alert('You got it!');
    correctCount++;
    break;
  } else if(ranUserInp > randomNum){
    alert('Too high.');
  } else if(ranUserInp < randomNum){
    alert('Too low.');
  } else{
    alert('That\'s not a number.');
  }
}
if(tryCounter === 5){
  document.getElementById(randomHTML).textContent = 'You didn\'t get it';
} else{
  document.getElementById(randomHTML).textContent = 'You got it';
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
