let maxNumber = 0;
let num = 0;
let guesses = [];

// start game function
function startGame () {
    while (maxNumber <= 0 || isNaN(maxNumber)) {
    //  prompt the user for the maxnumber
    let input = prompt("Enter the maximum number for the game:");

    // round the maxnumber if the user input a decimal
    maxNumber = Math.round(Number(input));
}

// generate a random number between 1 and the inputted max number
num = Math.floor(Math.random() * maxNumber) + 1;

document.getElementById("guessANum").innerHTML = `Guess a number between 1 and ${maxNumber}`;

// Function to check if guess has already been made
function haveGuess(guess) {
    return guesses.includes(guess);
}

// Function to handle the different guess scenarios
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
        if (guesses.length === 1){
            message.innerHTML = `You got it! It took you ${guesses.length} try and your guess was ${guesses.join(", ")}.`;
            document.getElementById("guessButton").disabled = true; // Disable the guess button
            document.getElementById("restartButton").style.display = "block"; // Show the restart button
        }
        else {
            message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses.join(", ")}.`;
            document.getElementById("guessButton").disabled = true; // Disable the guess button
            document.getElementById("restartButton").style.display = "block"; // Show the restart button
        }
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

// Function to reload the game
document.getElementById("restartButton").addEventListener("click", function() {
    location.reload(); // Reload the page when restart button is clicked
  });

// Event listener for the guess button
document.getElementById("guessButton").addEventListener("click", doGuess);

// Event listener in case the user submits a guess with the enter button
document.getElementById("guess").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission behavior
      doGuess(); // Call the doGuess function when Enter key is pressed
    }
  });
}

// Start the game when the page loads
startGame();
