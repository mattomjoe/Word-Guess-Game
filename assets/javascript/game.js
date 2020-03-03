document.addEventListener('DOMContentLoaded', function() {

    //Create an array that lists all of the word options.
    var simpsonsArray = [
        "Homer", 
        "Marge", 
        "Bart", 
        "Lisa", 
        "Maggie", 
        "Smithers", 
        "Burns", 
        "Wiggum", 
        "Apu", 
        "Moe", 
        "Skinner", 
        "Barney", 
        "Krusty", 
        "Brockman", 
        "Carl", 
        "Lou", 
        "Milhouse", 
        "Ned"
    ];

    // Creating variables to hold the number of wins, current word, number of guesses left, and letters already guessed.
    var wins = 0;
    var guessesLeft = 15;
    var guessedSofar = []; // Blank array to hold user guesses

    // Create variables that hold references to the places in HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    
    var winsText = document.getElementById("wins-text");
    var currentRandomWord = document.getElementById("currentRandomWord");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var guessSoFarText = document.getElementById("guess-so-far-text");


    winsText.innerHTML = wins;
    guessesLeftText.innerHTML = guessesLeft;
    
    // Randomly select Simpson name from array for user to guess
    var randomSimpsonName = simpsonsArray[Math.floor(Math.random() * simpsonsArray.length)];

    // currentRandomWord.innerHTML = randomSimpsonName;

    // Below code based on empty string separator (https://www.dyn-web.com/javascript/strings/split.php)
    var randomSimpsonNameArray = randomSimpsonName.split('');

    // currentRandomWord.innerHTML = randomSimpsonNameArray;

    // console.log(randomSimpsonNameArray);

    // console.log(simpsonsArray);

    // For loop prints dashes to screen based on number of letters in random word
    
    var blanksArray = []; // THIS VAR NEEDS TO STAY OUTSIDE OF FOR LOOP OTHERWISE ARRAY WILL RESET EVERY PASS!!!
    var blankSpace ="";

    for (var i = 0; i < randomSimpsonNameArray.length; i++) {
        console.log(randomSimpsonNameArray[i]);      
        blanksArray.push("_ ");
        console.log(blanksArray);
        currentRandomWord.innerHTML = blanksArray.join("");
    }

   

    



    function game() {
        var guessesLeft = 15;
        guessedSofar = []; // Blank array to hold user guesses
    }

    //Get user input using key press. Store info in variable for later use.
    //This function is run whenever the user presses a key.
    document.onkeyup = function(event){ // onkeyup is the event listener. "event" is not a method, it is an object passed in implicitly.
        var userGuess = event.key; // Event is being passed, key stroke is the part of the event that is captured. "key" is a property of the object, "event"
    }

    

    //Randomly choose a name from the array. This is the computer's choice for the user to guess.
    var computerChoice = simpsonsArray[Math.floor(Math.random() * simpsonsArray.length)];

    //Dashes appear below "Current Word", one dash per letter
    var answerArray = [];
    for (var i = 0; i < simpsonsArray.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = computerChoice.length;





//User enters letter guess for simpsonsArray random selection

document.onkeyup = function(event) {
    var userGuess = event.key;

}

//If user entry appears in simpsonsArray

})