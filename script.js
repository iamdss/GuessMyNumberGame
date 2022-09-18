'use strict';

const secretNumber = Math.trunc((Math.random()) * 20) + 1;
console.log(secretNumber);

let score = 20;
document.querySelector('.check').addEventListener('click',function(){
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number';
        } else if(secretNumber == guess) {
            document.querySelector('.message').textContent = 'Number Matched, You won';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.highscore').textContent = score;
            document.querySelector('.number').textContent = secretNumber;
        } else if(secretNumber > guess) {
            document.querySelector('.message').textContent = 'Number is too low';
            if(score > 1){
                score--;
                console.log(score);
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost!'; 
                document.querySelector('body').style.backgroundColor = '#ff0000';
            } 
        }
        else if(secretNumber < guess) {
            document.querySelector('.message').textContent = 'Number is too high';
            if(score > 1){
                score--;
                console.log(score);
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost!'; 
                document.querySelector('body').style.backgroundColor = '#ff0000';
            }
        }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = '0';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';
});