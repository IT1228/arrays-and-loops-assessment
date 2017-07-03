// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = <soccer, baseball>
// total = 4 <soccer, baseball, football, swimming>


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];

function longestString(array) {

  var longestWord = "";

  for(var i = 0; i < array.length; i++) {

    if(array[i].length > longestWord.length) {

      longestWord = array[i];

    }

  }

  return longestWord;

}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
// var numbers = [1,12,4,18,9,7,11,3,101,5,6];
// Math.min(...numbers);
// }
// alert(numbers);
// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
// function smallestNumber(numbers) {

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function smallestNumber(array){
  var smallestNumber = 200;

  for (var i = 0; i < array.length; i++) {

    if(array[i] < smallestNumber) {

      smallestNumber = array[i];

    }

  }

  return smallestNumber;

}

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

function getEvens(array){
  console.log(array);

  var evenNumbers = [];

  for (var i = 0; i < array.length; i++) {

    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i])

  }

  return evenNumbers

}

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(array){

  var reverseArray = [];

  for (var i = 11; i < array.length - 1; i--) {
    array[i]
  }

  return reverseArray;
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(array){

  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

arrayFunction(numbers);


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(array){
    var biggerThanTen = [];

    for (var i = 0; i < array.length; i++) {
      if(array[i] > 10){
   biggerThanTen.push(array[i]);
  }
}
return biggerThanTen;
}


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
function numbersOverX(array, number){
var biggest = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > number){
        biggest.push(array[i]);
    }
  }
  return biggest;
}


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays([arrayOne, arrayTwo]){
  var jointArray = arrayOne;
  for (var i = 0; i < arrayTwo.length; i++) {
    jointArray.push(arrayTwo[i]);
  }
  return jointArray;
}


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <['Will', 'JavaScript']>

var instructorOne = instructors[4][0];
// instructorOne = <['Dan', 'JavaScript'] ['JD', 'JavaScript']>

var instructorTwo = instructors[0][1];
// instructorTwo = <['JD', 'Javascript'] ['Tim', 'Javascript']>

var instructorThree = instructors[2][0];
// instructorThree = <['Brit', 'Ruby'] ['JD', 'Javascript']>
