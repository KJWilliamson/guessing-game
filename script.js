//1)Generate a random number between 1 and 100.
//Adding variables to store our data
let ranNum = Math.floor(Math.random() * 100) + 1;

//2)Record the turn number the player is on. Start it on 1.
//stores a guess count of 1 (used to keep track of how many guesses the player has had)
let guessCount = 1;

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


let resetButton;


//check whether a player's guess is correct or not, and respond appropriately.
//The first line declares a variable called userGuess and sets its value to the current value entered
// inside the text field. We also run this value through the built-in Number() constructor, just to 
//make sure the value is definitely a number. Since we're not changing this variable, we'll declare it 
//using const.
function checkGuess() {
    const userGuess = Number(guessField.value);
    // A conditional code block allows you to run code selectively, depending on whether a certain 
    //condition is true or not. It looks a bit like a function, but it isn't. The simplest form of 
    //conditional block starts with the keyword if, then some parentheses, then some curly braces. 
    //Inside the parentheses we include a test. If the test returns true, we run the code inside the
    // curly braces. If not, we don't, and move on to the next bit of code. In this case the test is 
    //testing whether the guessCount variable is equal to 1 (i.e. whether this is the player's first
    // go or not)
    if (guessCount === 1) {
        //If it is, we make the guesses paragraph's text content equal to Previous guesses. 
        //If not, we don't.
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === ranNum) {
        lastResult.textContent = 'Congrats!! You got it right!';
        lastResult.style.backgroundColor = '#5bc3eb';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = '#dadad9';
        if(userGuess < ranNum) {
            lowOrHi.textContent = 'Sorry! Your last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  //When we want to run the code, we type the name of the function followed by the parentheses.
checkGuess();


