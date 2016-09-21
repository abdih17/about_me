"use strict";

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

var answer= alert("So we are going to play a quick guessing game, and hopefully by the end of this game you know a lot more about me! Let's get started!");

var answerOne= prompt("Is my pet's name Gaara?");
if (answerOne.toLowerCase()=== 'y') {
  alert ('Your response was correct!');
  console.log ('Correct!');
} else {
  alert ('Sorry, your response was incorrect!');
  console.log ('Incorrect!');
}

var answerTwo = prompt('Is grapes my favorite fruit?');
if (answerTwo.toLowerCase() === 'y') {
  alert ('Sorry, your answer was incorrect.')
  console.log ('Incorrect.');
} else {
  alert ('Yay, your correct!');
  console.log ('Correct!');
}

var answerThree= prompt('Do I want to hike on the weekend?');
if (answerThree.toLowerCase()=== 'y') {
  alert ('Of course not! Are you trying to kill me?!')
    console.log ('Incorrect, I probably should though!');
} else {
  alert ('Yup, you got me all figured out!');
  console.log ('Correct');
}

var answerFour= prompt('Am I Somali?');
if (answerFour.toLowerCase()=== 'y') {
  alert ('Yup, and proud of it!')
  console.log ('Correct');
} else {
  alert ('Sorry, I\'m a proud Somali!');
  console.log ('Incorrect');
}

var answerFive= prompt('Do I really want to go visit South Korea one day?');
if (answerFive.toLowerCase()=== 'y') {
  alert ('You bet I do!')
  console.log ('Correct');
} else {
  alert ('Of course, I want to visit SK');
  console.log ('Incorrect');
}
