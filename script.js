'use strict';

let secretNumber = Math.trunc(Math.random()*20);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

console.log(document.querySelector('.message').textContent);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No Number!');
    }else if(guess === secretNumber){
        displayMessage('Correct Number!');
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'To high!' : 'Too low!');
            document.querySelector('.score').textContent = --score;
        }else{
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0; 
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20);
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    score = 20;

});

