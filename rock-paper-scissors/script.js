console.log("Rock 👊 , Paper ✋ , Scissors ✌ Game ⤵");

function rockpapercissorsGame() {
  const userChoicePrompt = prompt("Enter : Rock 👊 , Paper ✋ , Scissors ✌");
  let userChoice = userChoicePrompt.toLowerCase();

  const computerChoice = Math.floor(Math.random() * 3) + 1;
  //store the computer choise in string
  let computerChoiceStr;
  //Use Choice
  if (userChoice === "rock") {
    console.log("User Choice is : Rock 👊");
  } else if (userChoice === "paper") {
    console.log("User Choice is : Paper ✋");
  } else  {
    console.log("User Choice is : Scissors ✌");
  }

  //computer choice
  if (computerChoice === 1) {
     computerChoiceStr ='rock'
    console.log("Computer Choice is: Rock 👊");
  } else if (computerChoice === 2) {
    computerChoiceStr ='paper'
    console.log("Computer Choice is: Paper ✋");
  } else {
     computerChoiceStr ='scissors'
     console.log("Computer Choice is: Scissors ✌");
  }
   

//Rock case
if (userChoice === "rock" &&  computerChoiceStr === "scissors") {
   console.log("User wins! Rock crushes scissors.");
} else if (userChoice === "rock" &&  computerChoiceStr === "rock") {
   console.log("It's a tie! Both chose rock.");
} else if (userChoice === "rock" &&  computerChoiceStr === "paper") {
   console.log("Computer wins! Paper covers rock.");
} 


// Paper cases
else if (userChoice === "paper" &&  computerChoiceStr=== "rock") {
   console.log("User wins! Paper covers rock.");
} else if (userChoice === "paper" &&  computerChoiceStr === "paper") {
   console.log("It's a tie! Both chose paper.");
} else if (userChoice === "paper" &&  computerChoiceStr === "scissors") {
   console.log("Computer wins! Scissors cut paper.");
} 

// Scissors cases
else if (userChoice === "scissors" &&  computerChoiceStr === "paper") {
   console.log("User wins! Scissors cut paper.");
} else if (userChoice === "scissors" &&  computerChoiceStr === "scissors") {
   console.log("It's a tie! Both chose scissors.");
} else if (userChoice === "scissors" &&  computerChoiceStr === "rock") {
   console.log("Computer wins! Rock crushes scissors.");
}
  const promptAgain = prompt('Do you want to play again? Yes/No');
  let playAgain =  promptAgain ? promptAgain.toLocaleLowerCase() : 'No' ;

  if(playAgain === 'yes'){
    rockpapercissorsGame();
  }else {
    console.log('Thanks for playing!');
  }

}
//Start the game
rockpapercissorsGame();
