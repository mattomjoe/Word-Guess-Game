//create array of Simpsons characters that can be guessed

var currentWord = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Smithers", "Burns", "Wiggum", "Apu", "Moe", "Skinner", "Barney", "Krusty", "Brockman", "Carl", "Lou", "Milhouse", "Ned"];

//User presses any key to start game

object.onkeyup = function(event){ //taken from r-p-s video

};

//Simpsons name from currentWord array is randomly selected

var currentWord = currentWord[Math.floor(Math.random()*currentWord.length)]; //modified from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array



//Dashes appear below "Current Word", one dash per letter



//User enters letter guess for currentWord random selection

var userGuess = event.key;

//If user entry appears in currentWord

