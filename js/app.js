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
    'It\'s ok, I didn\'t know about it before',
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

/*
Setting the number of attempts for random and where lived questions
*/
var attemptSet = [
  4, // random number question
  6 // where lived question
];

/*
Setting places lived
*/
var whereLived = [
  'VT',
  'PA',
  'AZ',
];

// Welcome message
alert('Welcome to the guessing game, please answer with yes/y or no/n');

// asks question 1-5
var questionsAboutMe = function(qArr){
  // question loop
  for(i = 0; i < qArr.length; i++){
    do{
      var answer = prompt(qArr[i][0]).toLowerCase();
      console.log('Question ' + i + ' : ' + answer); // displays array index
    } while(answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n');

    switch(i){
    case 0:case 1:case 3:case 4:
      if(answer === 'yes' || answer === 'y') {
        alert(qArr[i][1]);
        correctCount++;
      } else {
        alert(qArr[i][2]);
      }
      break;

    case 2:
      if(answer === 'no' || answer === 'n') {
        alert(qArr[i][1]);
        correctCount++;
      } else {
        alert(qArr[i][2]);
      }
      break;

    default:
      break;
    }

    document.getElementById(qArr[i][3]).textContent = answer;
    console.log('Correct count : ' + correctCount);
  }
};

// ask random number question
var numberQuestion = function(attempts){
  var randomNum = Math.floor(Math.random() * 10);
  console.log('Random number : ' + randomNum + ' is a ' + typeof randomNum);
  for(tryCounter = 0; tryCounter < attempts; tryCounter++){
    attemptNum = tryCounter + 1;
    var ranUserInp = parseInt(prompt(attemptNum + ' of ' + attempts + ' tries. Guess the random number between 0 and 9:'));
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
  document.getElementById(randomNumber).textContent = randomNum;
  console.log('Correct count : ' + correctCount);
};

// asks where I lived
var placesLived = function(statesLived, attempts){
  for(tryCounter = 0; tryCounter < attempts; tryCounter++){
    attemptNum = tryCounter + 1;
    var livedGuess = prompt(attemptNum + ' of ' + attempts + ' tries. Guess a state I have lived in outside of Washington (use state appbreviations):').toUpperCase();
    console.log('Guess : ' + livedGuess);
    console.log('Attempt Number : ' + attemptNum);
    for(i = 0; i < statesLived.length; i++){
      if(livedGuess === statesLived[i]){
        alert('You got it, great job!');
        correctCount++;
        return;
      } else{
        alert('I haven\'t lived there, try again.');
      }
    }
  }
  console.log('Correct count : ' + correctCount);
};

// html function
var htmlUpdate = function(counterNum, congratMess){
  if(tryCounter === parseInt(counterNum)){
    document.getElementById(congratMess).textContent = 'You didn\'t get it';
  } else{
    document.getElementById(congratMess).textContent = 'You got it';
  }
};


/*
Function calls for main body program execution
*/
//question 1-5
questionsAboutMe(questionAllArray);

//questions 6
numberQuestion(attemptSet[0]);
htmlUpdate(attemptSet[0], randomHTML);

//question 7
placesLived(whereLived, attemptSet[1]);
htmlUpdate(attemptSet[1], stateHTML);

//final count
document.getElementById(correctHTML).textContent = correctCount;
