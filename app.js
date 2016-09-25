'use strict';

var score = 0;

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

alert('Hi, ' + username + ' we are going to play a quick guessing game, so hopefully by the end of this game you know a lot more about me than I know about you! Let\'s get started!');

// Question 1:
function question1(){
  var answerOne = prompt('Is my cat\'s name Gaara?');
  answerOne = answerOne.toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    alert ('Your response was correct!');
    score = score + 1;
    console.log ('Correct');
  } else {
    alert ('Sorry, your response was incorrect!');
    console.log ('Incorrect');
  }
}
question1();

// Question 2:
function question2(){
  var answerTwo = prompt('Are grapes my favorite fruit?');
  answerTwo = answerTwo.toLowerCase();
  if (answerTwo === 'no' || answerTwo === 'n') {
    alert ('Yay, your correct!');
    score = score + 1;
    console.log ('Incorrect');
  } else {
    alert ('Sorry, your answer was incorrect.');
    console.log ('Correct');
  }
}
question2();

// Question 3:
function question3(){
  var answerThree = prompt('Do I want to hike on the weekend?');
  answerThree = answerThree.toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    alert ('Of course not! Are you trying to kill me?!');
    console.log ('Incorrect, I probably should though!');
  } else {
    alert ('Yup, you got me all figured out!');
    score = score + 1;
    console.log ('Correct');
  }
}
question3();

// Question 4:
function question4(){
  var answerFour = prompt('Am I Somali?');
  answerFour = answerFour.toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    alert ('Yup, and proud of it!');
    score = score + 1;
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
  answerFive = answerFive.toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    alert ('You bet I do!');
    score = score + 1;
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
  for (var numberOfGuesses = 0; numberOfGuesses < 5; numberOfGuesses++) {
    var guess1 = parseInt(prompt('On a scale of 1-10, how comfortable am I with Javascript?'));
    if (answerSix === guess1) {
      alert('Wow, great guess!');
      score = score + 1;
      console.log('Correct');
      break;
    } else {
      if (guess1 > 4) {
        alert('Oh no, you\'re just a little high!');
        console.log('Incorrect');
      } else {
        alert ('You\'re just a little low.');
        console.log('Incorrect');
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
    var response = prompt('Guess a state I\'ve lived in before? Using state abbreviation only.').toUpperCase();
    var passed = false;
    for(var j = 0; j < answerSeven.length; j++){
      if(answerSeven[j] === response){
        passed = true;
      }
    }
    if(passed){
      alert('You\'re right!');
      score = score + 1;
      console.log('Correct');
      isRight = true;
      break;
    }
    else{
      alert('Oh no, try again.');
      console.log('Incorrect');
    }
  }
  if(!isRight){
    alert('Oh no, you guessed incorrectly!');
    console.log('Incorrect');
  }
}
question7();

// Total Score
var scorePercent = Math.floor((score / 7) * 100);

if (scorePercent > 60) {
  alert('Wow! You got ' + score + ' out of 7 questions correct, so that\'s ' + scorePercent + '%. Awesome work ' + username + ' it feels like you know me well already!');
  console.log('Really, how do they me so well! ' + scorePercent + '%');
} else {
  alert('NOOOOOOOOO, how could you?! You got ' + score + ' out of 7 correct, so that\'s only ' + scorePercent + '%! Well I guess you\'ll just have to learn more about me by checking out my page. :)');
  console.log(scorePercent);
}

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
// function testAnswer(response){
//   var answerSeven = ['OH', 'CA', 'WA', 'AZ', 'MN'];
//   for(var i = 0; i < answerSeven.length; i++){
//     if(answerSeven[i] === response){
//       return true;
//     }
//   }
//   return false;
// }
