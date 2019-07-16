document.addEventListener('DOMContentLoaded', function() {



//User presses any key to start game

object.onkeyup = function(event){ //taken from r-p-s video

};

    //Create an array that lists all of the word options.
    var currentWord = [
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

    //Randomly choose a name from the array. This is the computer's choice for the user to guess.
    var computerChoice = currentWord[Math.floor(Math.random() * currentWord.length)];

    //Dashes appear below "Current Word", one dash per letter
    var answerArray = [];
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = computerChoice.length;

    



//User enters letter guess for currentWord random selection

document.onkeyup = function(event) {
    var userGuess = event.key;

}

//If user entry appears in currentWord

})