//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

//1)Generate a random number between 1 and 100.
//Adding variables to store our data
let ranNum = Math.floor(Math.random() * 100) + 1;

//2)Record the turn number the player is on. Start it on 1.

//3)Provide the player with a way to guess what the number is.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
//In this particular case, we first created a guessField constant that stores a reference to the text 
//input form field in our HTML — the following line can be found amongst our declarations near the top 
//of the code:
//Because guessField now contains a reference to an <input> element, it now has access to a number of 
//properties (basically variables stored inside objects, some of which can't have their values changed) 
//and methods (basically functions stored inside objects). One method available to input elements is 
//focus(), so we can now use this line to focus the text input:
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

//This line uses the focus() method to automatically put the text cursor into the <input> text field 
//as soon as the page loads, meaning that the user can start typing their first guess right away, without
// having to click the form field first. It's only a small addition, but it improves usability — giving 
//the user a good visual clue as to what they've got to do to play the game.
//Because guessField now contains a reference to an <input> element, it now has access to a number of 
//properties (basically variables stored inside objects, some of which can't have their values changed) 
//and methods (basically functions stored inside objects). One method available to input elements is 
//focus(), so we can now use this line to focus the text input:
guessField.focus();

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
        //appends the current userGuess value onto the end of the guesses paragraph, plus a blank 
        //space so there will be a space between each guess shown.
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    //The first if(){ } checks whether the user's guess is equal to the randomNumber set at the top of 
    //our JavaScript. If it is, the player has guessed correctly and the game is won, so we show the
    // player a congratulations message with a nice green color, clear the contents of the Low/High guess
    // information box, and run a function called setGameOver()
    if (userGuess === ranNum) {
        lastResult.textContent = 'Congrats!! You got it right!';
        lastResult.style.backgroundColor = '#5bc3eb';
        lowOrHi.textContent = '';
        setGameOver();
        //Now we've chained another test onto the end of the last one using an else if(){ } structure.
        // This one checks whether this turn is the user's last turn. If it is, the program does the same
        // thing as in the previous block, except with a game over message instead of a congratulations 
        //message.
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
        //The final block chained onto the end of this code (the else { }) contains code that is only
        // run if neither of the other two tests returns true (i.e. the player didn't guess right, but
        // they have more guesses left). In this case we tell them they are wrong, then we perform 
        //another conditional test to check whether the guess was higher or lower than the answer, 
        //displaying a further message as appropriate to tell them higher or lower.
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = '#dadad9';
        if(userGuess < ranNum) {
            lowOrHi.textContent = 'Sorry! Your last guess was too low!';
        } else if(userGuess > ranNum) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    //The last three lines in the function get us ready for the next guess to be 
    //submitted. We add 1 to the guessCount variable so the player uses up their turn 
    //(++ is an incrementation operation — increment by 1), and empty the value out of the form text 
    //field and focus it again, ready for the next guess to be entered.
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  //Here we are adding an event listener to the guessSubmit button. This is a method that takes two 
  //input values (called arguments) — the type of event we are listening out for (in this case click) 
  //as a string, and the code we want to run when the event occurs (in this case the checkGuess() 
  //function). 
  guessSubmit.addEventListener('click', checkGuess);



  //The first two lines disable the form text input and button by setting their disabled properties to 
  //true. This is necessary, because if we didn't, the user could submit more guesses after the game is 
  //over, which would mess things up. The next three lines generate a new <button> element, set its text 
  //label to "Start new game", and add it to the bottom of our existing HTML. The final line sets an 
  //event listener on our new button so that when it is clicked, a function called resetGame() is run.
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }


  //this block of code completely resets everything
  function resetGame() {
    //Puts the guessCount back down to 1.
    guessCount = 1;

    //Empties all the text out of the information paragraphs. We select all paragraphs inside 
    //<div class="resultParas"></div>, then loop through each one, setting their textContent to '' 
    //(an empty string).
    //This code creates a variable containing a list of all the paragraphs inside 
    //<div class="resultParas"> using the querySelectorAll() method, then it loops through each one, 
    //removing the text content of each.
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    //Removes the reset button from our code.
    resetButton.parentNode.removeChild(resetButton);
    //Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    //Removes the background color from the lastResult paragraph.
    lastResult.style.backgroundColor = 'white';
    //Generates a new random number so that you are not just guessing the same number again!
    ranNum = Math.floor(Math.random() * 100) + 1;

  }


