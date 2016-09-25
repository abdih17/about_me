'use strict';

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

alert('Hi, ' + username + ' we are going to play a quick guessing game, so hopefully by the end of this game you know a lot more about me than I know about you! Let\'s get started!');

// Question 1:
function question1(){
  var answerOne = prompt('Is my cat\'s name Gaara?');
  if (answerOne.toLowerCase() === 'yes' || 'y') {
    alert ('Your response was correct!');
    console.log ('Correct!');
  } else {
    alert ('Sorry, your response was incorrect!');
    console.log ('Incorrect!');
  }
}
question1();

// Question 2:
function question2(){
  var answerTwo = prompt('Is my favorite fruit, grapes?');
  if (answerTwo.toLowerCase() === 'yes' || 'y') {
    alert ('Yay, your correct!');
    console.log ('Incorrect.');
  } else {
    alert ('Sorry, your answer was incorrect.');
    console.log ('Correct!');
  }
}
question2();

// Question 3:
function question3(){
  var answerThree = prompt('Do I want to hike on the weekend?');
  if (answerThree.toLowerCase() === 'yes' || 'y') {
    alert ('Of course not! Are you trying to kill me?!');
    console.log ('Incorrect, I probably should though!');
  } else {
    alert ('Yup, you got me all figured out!');
    console.log ('Correct');
  }
}
question3();

// Question 4:
function question4(){
  var answerFour = prompt('Am I Somali?');
  if (answerFour.toLowerCase() === 'yes' || 'y') {
    alert ('Yup, and proud of it!');
    console.log ('Correct');
  } else {
    alert ('Sorry, I\'m a proud Somali!');
    console.log ('Incorrect');
  }
}
question4();

// Question 5:
function question5(){
  var answerFive = prompt('Do I really want to go visit South Korea one day?');
  if (answerFive.toLowerCase() === 'yes' || 'y') {
    alert ('You bet I do!');
    console.log ('Correct');
  } else {
    alert ('Of course, I want to visit SK.');
    console.log ('Incorrect');
  }
}
question5();

// Question 6:
function question6(){
  var answerSix = 4;
  for (var numberOfGuesses = 0; numberOfGuesses < 4; numberOfGuesses++) {
    var guess = parseInt(prompt('On a scale of 1-10, how comfortable am I with Javascript?'));
    if (answerSix === guess) {
      alert('The number you entered was correct. You won!');
      console.log('Correct!');
      break;
    } else {
      if (guess > 4) {
        alert('Oh no, you\'re just a little too high!');
      } else {
        alert ('Oh yeah, you\'re getting warmer');
      }
    }
  }
}
question6();

// Question 7:
function question7(){
  var answerSeven = ['OH', 'CA', 'WA', 'AZ', 'MN'];
  var isRight = false;
  for(var i = 0; i < 6; i++){
    var response = prompt('Guess a state I\'ve lived in before?').toUpperCase();
    var passed = false;
    for(var j = 0; j < answerSeven.length; j++){
      if(answerSeven[j] === response){
        passed = true;
      }
    }
    if(passed){
      alert('You\'re right');
      console.log('Correct!');
      isRight = true;
      break;
    }
    else{
      alert('Oh no, try again.');
      console.log('Incorrect!');
    }
  }
  if(!isRight){
    alert('You suck!');
    console.log('Correct!');
  }
}
question7();


// function quest7(){
//   var isRight = false;
//   for(var i = 0; i < 6; i++){
//     var response = prompt('which state have I lived in').toUpperCase();
//     if(testAnswer(response)){
//       alert('you\'re right');
//       isRight = true;
//       break;
//     }
//     else{
//       alert('try again');
//     }
//   }
//   if(!isRight){
//     alert('you suck');
//   }
// }
// quest7();
//
// function testAnswer(response){n
//   var answerSeven = ['OH', 'CA', 'WA', 'AZ', 'MN'];
//   for(var i = 0; i < answerSeven.length; i++){
//     if(answerSeven[i] === response){
//       return true;
//     }
//   }
//   return false;
// }
