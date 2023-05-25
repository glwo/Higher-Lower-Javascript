let maxNumber = 0;
let num = 0;
let guesses = [];

while (maxNumber <= 0 || isNaN(maxNumber)) {
    let input = prompt("Enter the maximum number for the game:");

    maxNumber = Math.round(Number(input));
}

num = Math.floor(Math.random() * maxNumber) + 1;

document.getElementById("guessANum").innerHTML = `Guess a number between 1 and ${maxNumber}`;

function haveGuess(guess) {
    return guesses.includes(guess);
}

function doGuess() {
    let guess = Number(document.getElementById("guess").value)

    let message = document.getElementById("message");

    if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }

    else if (guess < 1 || guess > maxNumber) {
        message.innerHTML = "That number is not in range, try again.";
    }

    else if (haveGuess(guess)) {
        message.innerHTML = "You already guessed that number!";
    }

    else if (guess == num) {
        guesses.push(guess);
        message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses.join(", ")}.`;
    }

    else if (guess > num) {
        guesses.push(guess);
        message.innerHTML = "No, try a lower number.";
    }

    else {
        guesses.push(guess);
        message.innerHTML = "No, try a higher number.";
    }
}

document.getElementById("guessButton").addEventListener("click", doGuess);
