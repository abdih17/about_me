'use strict';
//
var score= 0

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

alert('So we are going to play a quick guessing game, and hopefully by the end of this game you know a lot more about me! Let\'s get started');

function quest1(){
  var answerOne = prompt('Is my pet\'s name Gaara?');
  if (answerOne.toLowerCase() === 'yes' || 'y') {
    alert ('Your response was correct!');
  score = score + 1;
    console.log ('Correct!');
  } else {
    alert ('Sorry, your response was incorrect!');
    console.log ('Incorrect!');
  }
}
quest1();

function quest2(){
  var answerTwo = prompt('Is grapes my favorite fruit?');
  if (answerTwo.toLowerCase() === 'yes' || 'y') {
    alert ('Sorry, your answer was incorrect.');
    console.log ('Incorrect.');
  } else {
    alert ('Yay, your correct!');
    console.log ('Correct!');
  }
}
quest2();

function quest3(){
  var answerThree = prompt('Do I want to hike on the weekend?');
  if (answerThree.toLowerCase() === 'yes' || 'y') {
    alert ('Of course not! Are you trying to kill me?!');
    console.log ('Incorrect, I probably should though!');
  } else {
    alert ('Yup, you got me all figured out!');
    console.log ('Correct');
  }
}
quest3();

function quest4(){
  var answerFour = prompt('Am I Somali?');
  if (answerFour.toLowerCase() === 'yes' || 'y') {
    alert ('Yup, and proud of it!');
    console.log ('Correct');
  } else {
    alert ('Sorry, I\'m a proud Somali!');
    console.log ('Incorrect');
  }
}
quest4();

function quest5(){
  var answerFive = prompt('Do I really want to go visit South Korea one day?');
  if (answerFive.toLowerCase() === 'yes' || 'y') {
    alert ('You bet I do!');
    console.log ('Correct');
  } else {
    alert ('Of course, I want to visit SK');
    console.log ('Incorrect');
  }
}
quest5();

function quest6(){
  var answerSix = 4;
  for (var numberOfGuesses = 0; numberOfGuesses < 4; numberOfGuesses++) {
    var guess = parseInt(prompt('On a scale of 1-10, how comfortable am I with Javascript?'));
    if (answerSix === guess) {
      alert('The number you entered was correct. You won!');
      break;
    } else {
      if (guess > 4) {
        alert('Oh no, you\'re just a little too high!');
      } else {
        alert ('Oh yeah, you\'re getting warmer');
      }
        // alert('Sorry, your out of your chances. Don\'t worry, you can learn more about me on my page... after once last question of course!');
    }
  }
}
quest6();

function quest7(){
  var numberOfGuessesTwo = 0;
  var correctAnswer = true;
  var answerSeven = ['OH', 'CA', 'WA', 'AZ', 'MN'];
  while (numberOfGuessesTwo < 6 && correctAnswer) {
    numberOfGuessesTwo++;
    console.log('The user has guessed' + guesses + 'times');
    var guesses = prompt('Enter guess, '.toLowerCase)
    for (var i = 0; i < answerSeven.length; i++) {
      if (answerSeven[i] === guessTwo) {
        alert('Hey you\'re right, how\'d you know?');
        correctAnswer === false;
      }
      console.log('the user guessed the state '+ guesses);
    }
  }

  if (guesss >= 6) {
    alert ('Wow, ' + );
    console.log()
  }



    var guessTwo = prompt('Guess which state I\'ve lived before?');
    console.log(numberOfGuessesTwo);
    console.log(guessTwo);

    for (var i = 0; i < answerSeven.length; i++) {
    }
  }
}
quest7();

//   } else {
//     alert('Try again! Hint: The hottest state in the US of A.');
//   }
// }
