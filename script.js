//1)Generate a random number between 1 and 100.
//Adding variables to store our data
let ranNum = Math.floor(Math.random() * 100) + 1;
//2)Record the turn number the player is on. Start it on 1.
//3)Provide the player with a way to guess what the number is.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
//4)Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
//5)Next, check whether it is the correct number.
//6)If it is correct: Display congratulations message. Stop the player from being able to enter more guesses (this would mess the game up). Display control allowing the player to restart the game.
//7)If it is wrong and the player has turns left: Tell the player they are wrong and whether their guess was too high or too low. Allow them to enter another guess. Increment the turn number by 1.
//8)If it is wrong and the player has no turns left: Tell the player it is game over. Stop the player from being able to enter more guesses (this would mess the game up). Display control allowing the player to restart the game.
//9)Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

//stores a guess count of 1 (used to keep track of how many guesses the player has had)
let guessCount = 1;
let resetButton;


//check whether a player's guess is correct or not, and respond appropriately.
function checkGuess() {
    console.log('I am a placeholder');
  }
  //When we want to run the code, we type the name of the function followed by the parentheses.
checkGuess();


