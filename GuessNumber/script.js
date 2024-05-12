let random = (parseInt(Math.random()*100 +1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');

const guessSlot = document.querySelector('.guesses');

const rem = document.querySelector('.lastResult');

const lowHeigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);  
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number!!");
    }
    else if(guess < 1){
        alert("Please enter number greater than 1");
    }
    else if(guess >100){
        alert("Please enter number less then 100");
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over, random number was : ${random}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage('You are right');
        endGame();
    }
    else if(guess < random){
        displayMessage('Number is tooooooo Low');
    }
    else if(guess > random){
        displayMessage('Number is tooo high');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    rem.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    lowHeigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        random = (parseInt(Math.random()*100 +1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        rem.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}

