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
var guessesLeft = 5;
var guessesMade = [];

function generateLetter(){
    correctLetter = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    console.log("The correct letter is: " + correctLetter);
}

generateLetter();


document.onkeyup = function (event){
    userLetter = event.key;
    console.log(userLetter);
    if (userLetter === correctLetter){
        console.log("Winner!");
        wins++;
        document.getElementById("wins-display").textContent = wins;
        console.log("wins: "+ wins);
        guessesMade.push(userLetter);
        document.getElementById("guesses-display").textContent = guessesMade;
        console.log("guessesMade: "+ guessesMade);
        // guessesLeft = 5;
        // console.log("guessesLeft: "+ guessesLeft);
        // document.getElementById("guessesLeft").textContent = guessesLeft;
        guessesMade = [];
        guessesLeft = 5;

        generateLetter();
    }else {
        if (guessesLeft === 1){
            loses++;
            document.getElementById("loses-display").textContent = loses;
            console.log("You used up all your tries. Try to guess another letter!");
            
            console.log("guessesLeft: "+ guessesLeft);
            document.getElementById("guessesLeft").textContent = guessesLeft;
            guessesLeft = 5;
            
            guessesMade.push(userLetter);
            console.log("guessesMade: "+ guessesMade);
            document.getElementById("guesses-display").textContent = guessesMade;
            guessesMade = [];
            
            
            generateLetter();
        }
        else{
            console.log("Loser!");
            console.log("loses: "+ loses);
            console.log("wins: "+ wins);
            guessesLeft--;
            console.log("guessesLeft: "+ guessesLeft);
            document.getElementById("guessesLeft").textContent = guessesLeft;
            guessesMade.push(userLetter);
            console.log("guessesMade: "+ guessesMade);
            document.getElementById("guesses-display").textContent = guessesMade;
        }
    }
}


