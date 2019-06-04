'use strict';

// Array Demonstration
// Array is a collection of values
/*
Arrays store their values at an index
an index is a number that starts at 0 and
increases by one for every new item in ther arra
y
The first item ALWAYS starts at index 0

We access items in an array with bracket notation
ex: array[2]
This would be spoken as: "I would access the array at position || index 2"

example array
['a','b','c']
has indexes
0, 1, 2

*/

var emptyArray = [];
var quizAnswers = ['a','b','c','d','e'];
var arrayOfThings = ['string', {}, ['a'], console.log, undefined, null, 0, 2, true, 'last item of the array'];

console.log('10th thing in array : ' + arrayOfThings[9]);
console.log('9th index of array : ' + arrayOfThings[9]);
console.log('Quiz answer @ index 2 is string c : ' + (quizAnswers[2] === 'c'));
console.log(quizAnswers);

quizAnswers[2] = 'z';
console.log(quizAnswers[2] === 'z');

console.log('I have this many quiz answers: ' + quizAnswers.length);

// console.log(arrayOfThings);
