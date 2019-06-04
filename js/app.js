'use strict';

// Welcome message
alert('Welcome to the guessing game, please answer with yes/y or no/n');

// Favorite color
var favColor = prompt('Is your favorite color #201d57?');
console.log('fav color initial answer : ' + favColor);
favColor = favColor.toLowerCase(); // set all string characters as lower case
console.log('fav color after lower : ' + favColor);
console.log('fav color first letter after lower : ' + favColor[0]);

if (favColor === 'yes' || favColor === 'y') {
  alert('That\'s my favorite color too!');
} else if (favColor === 'no' || favColor === 'n') {
  alert('I hate you, we aren\'t friends anymore.');
} else {
  alert('You didn\'t really try did you...');
}

var colorEl = document.getElementById('colorRes');
colorEl.textContent = favColor;

// Favorite food topping
var favFoodTopping = prompt('Is your favorite food topping Vermont maple syrup?');
console.log('fav food topping initial answer : ' + favFoodTopping);
favFoodTopping = favFoodTopping.toLowerCase(); // set all string characters as lower case
console.log('fav food topping after lower : ' + favFoodTopping);
console.log('fav food topping first letter after lower : ' + favFoodTopping[0]);

if (favFoodTopping === 'yes' || favFoodTopping === 'y') {
  alert('That\'s definitely the right choice, Vermont maple syrup is the best!');
} else if (favFoodTopping === 'no' || favFoodTopping === 'n') {
  alert('You\'re wrong and should rethink your life choices');
} else {
  alert('Again! You didn\'t really try did you...');
}

var toppingEl = document.getElementById('toppingRes');
toppingEl.textContent = favFoodTopping;

// Favorite board game
var favBoardGame = prompt('Is your least favorite board game Settler\'s of Catan?');
console.log('fav board game initial answer : ' + favBoardGame);
favBoardGame = favBoardGame.toLowerCase();
console.log('fav board game after lower : ' + favBoardGame);
console.log('fav board game first letter after lower : ' + favBoardGame[0]);

if (favBoardGame === 'yes' || favBoardGame === 'y') {
  alert('You should have better taste in board games');
} else if (favBoardGame === 'no' || favBoardGame === 'n') {
  alert('Catan is the best board game. Hands down, no questions asked');
} else {
  alert('Not again! You didn\'t try at all...');
}

var gameEl = document.getElementById('gameRes');
gameEl.textContent = favBoardGame;

// Favorite pet type
var favPet = prompt('Is your favorite pet a dog?');
console.log('fav pet initial answer : ' + favPet);
favPet = favPet.toLowerCase();
console.log('fav pet after lower : ' + favPet);
console.log('fav pet first letter after lower : ' + favPet[0]);

if (favPet === 'yes' || favPet === 'y') {
  alert('Dog\'s are the best!');
} else if (favPet === 'no' || favPet === 'n') {
  alert('You should really consider getting a dog');
} else {
  alert('You\'ve got one more chance! You didn\'t try at all, again...');
}

var petEl = document.getElementById('petRes');
petEl.textContent = favPet;

// Favorite music choice
var favMusic = prompt('Is your favorite music genre Metal?');
console.log('fav music initial answer : ' + favMusic);
favMusic = favMusic.toLowerCase();
console.log('fav music after lower : ' + favMusic);
console.log('fav music first letter after lower : ' + favMusic[0]);

if (favMusic === 'yes' || favMusic === 'y') {
  alert('Rock on my friend, rock on!');
} else if (favMusic === 'no' || favMusic === 'n') {
  alert('You should be rocking a little harder');
} else {
  alert('I told you this was your last chance... there\'s nothing left');
}

var musicEl = document.getElementById('musicRes');
musicEl.textContent = favMusic;
