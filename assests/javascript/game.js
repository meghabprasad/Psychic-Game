// create an array called letterOptions of possible letters
// create var correctLetter to store the randomly picked letter 
// create counter for wins and set to 0 
// create counter for loses and set to 0
// create counter for guesses left and set to 5;
// create empty array for guessesMade;
// listen to the key pressed by user onkeyup {
    //store event.key to a var user-text
    //check to see if user-text is equal to any of the elements in the letterOptions array
    //if it is wins++
    //if it is not loses++
    //push the user-text to guessesMade array;
    //display everything to the screen
//}

var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var correctLetter;
var userLetter;
var wins = 0;
var loses = 0;
var guessesLeft = 0;
var guessesMade = [];



document.onkeyup = function (event){
    userLetter = event.key;
    console.log(userLetter);
}

