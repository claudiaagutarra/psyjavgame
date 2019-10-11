var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var toBeginText = document.getElementById("tobegin");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessedLettersText = document.getElementById("guessed-letters");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    if (event.keyCode<65 || event.keyCode>90) return;

    var userGuess = event.key; 

    var userGuessLower = userGuess.toLowerCase();
    guessedLetters.push(userGuessLower);

    if (computerChoices.indexOf(userGuessLower) > -1) {

        if (userGuessLower === computerGuess) {
            wins++;
            alert ("You guessed the right letter! :) The computer's choice was: " + computerGuess.toLowerCase() + ". Press OK to play again")
            guessesLeft = 9;
            guessedLetters = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        } else if (userGuessLower !== computerGuess) {
            guessesLeft--;
        }

        toBeginText.textContent = "";
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessedLettersText.textContent = "Your guesses so far: " + guessedLetters;
    };

    if (guessesLeft === 0) {
        losses++;
        alert ("The computer's choice was: " + computerGuess.toLowerCase());
        var playAgain = confirm("You lost ): Press OK to play again.")
        if (playAgain === true) {
            toBeginText.textContent = " ~ Press any letter to play again ~ ";
            guessesLeft = 9;
            guessedLetters = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
    }
};
