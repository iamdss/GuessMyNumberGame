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