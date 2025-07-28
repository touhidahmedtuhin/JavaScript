console.log('Number Guessing Game');
console.log('Guess a number between 1 to 10');
function gusses() {
  let numGuessPrompt = prompt('Enter a number between 1 to 10');
  let numGuess = Number(numGuessPrompt);
  const correctNum = 2;
  let attempts = 1;

  while (numGuess !== correctNum) {
    if (numGuess < correctNum) {
      console.log('Too low! Try again');
    } else if (numGuess > correctNum) {
      console.log('Too high! Try again');
    }
    numGuessPrompt = prompt('Enter a number between 1 to 10');
    numGuess = Number(numGuessPrompt);
    attempts++;
  }

  console.log(`Congrats! You guessed the number in ${attempts} attempts`);
}
gusses();
