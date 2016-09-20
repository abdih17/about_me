var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);

var vote = prompt('Who are you voting for?');
alert('You\'re voting for ' + vote + '.');
console.log('The user is voting for ' + vote);

var won = prompt('How will you celebrate if s/he wins?');
alert('Party on, you lucky champ!');
console.log('The user will celebrate by ' + won + "!");

var lose = prompt('Where will you live for 4 years, if ' + vote + '\'s opponent wins?');
alert('Hi, my name is ' + username + ', and I\'m voting for ' + vote + '. ' + 'If ' + vote + ' wins, I\'m going to ' + won + ', and party on. ' + 'If, however, my candidate loses... I\'ll be in ' + lose + ', and I guess I\'ll see you guys again in 4 years!');
console.log('If s/he loses to their opponent, you can find me in ' + lose + "!");
