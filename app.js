"use strict";

var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

var questions= prompt("So we are going to play a quick guessing game, and hopefully by the end of this game you know a lot more about me! Let's get started!");

var questionOne= prompt("Do I have a pet cat named Gara?");
if (questionOne=== 'yes') {
  alert ('Your response was correct!');
  console.log ('Your response was correct!');
} else {
  alert ('Your response was incorrect!');
  console.log ('Your response was incorrect!');
}



/*
var questionTwo= prompt('');
if (questionTwo=== 'yes') {
  alert ('')
} else {
  alert ('');
}

var questionThree= prompt('');
if (questionThree=== 'yes') {
  alert ('')
} else {
  alert ('');
}

var questionFour= prompt('');
if (questionFour=== 'yes') {
  alert ('')
} else {
  alert ('');
}

var questionFive= prompt('');
if (questionFive=== 'yes') {
  alert ('')
} else {
  alert ('');
}






/*
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {

if(choice1 === choice2) {
    return "The result is a tie!";
}

else if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
}
    else {
        return "paper wins";
    }
}

else if(choice1 === "paper") {

    if(choice2 === "rock")  {
        return "paper wins";
        }
    else {
        return "scissors wins";
        }
    }
else if(choice1 === "scissors") {

    if(choice2 === "rock")  {
        return "rock wins";
        }
    else {
        return "scissors wins";
        }
    }
};
compare(userChoice, computerChoice);
*/
