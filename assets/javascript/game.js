

//here is the array of possible answers
var answers = ["rooster", "monkey", "sheep", 
				"horse", "giraffe", "shark", 
				"iguana", "turtle", "raccoon", 
				"cheetah"];


var word;
var userGuess;
var guesses = [];
var secretWord = [];
var letters = [];
var lives = 6;
var correctGuess = 0;
var numWins = 0;


alert("Press any key to start after clicking OK.");


//set everything back to default which will be used when game is over
//or when game is won
function reset() {
	secretWord = [];
	letters = [];
	guesses = [];
	lives = 6;
	correctGuess = 0;
	document.getElementById("score").innerHTML = lives;
	document.getElementById("letters").innerHTML = letters;
}

//keep looping the game until user quits
document.onkeyup = function keepGoing(event) {
  


//select a random word for hangman from the array
word = answers[Math.floor(Math.random() * answers.length)];
secretWord.push(word);
guesses.push(word);


//replace the entirety of the word with blanks 
for (var i = 0; i < word.length; i++) {
	guesses[i] = "_ ";
}

// prints the blanks in the html 
function printWord() {
	for (var i = 0; i < word.length; i++) {
	var game = document.getElementById("game");
	var create = document.createTextNode(guesses[i]);
	game.appendChild(create);
	}
}


//var game = document.getElementById("game");
//game.innerHTML = "";

//print out the blank spaces in the game
printWord();

//what happens after the user releases a key is contained in this function
document.onkeyup = function(event) {	

	//assigns whatever key the user presses into this var
	var userGuess = event.key;

	

	//search the entire keyword to see if it contains the user input key
	//if it does, display that key 

	for (var j = 0; j < word.length; j++)
	{
	
		if (userGuess === secretWord[0][j]) {
			console.log("!!!!!!!!!!!!!!");
			guesses[j] = secretWord[0][j];
			correctGuess++;
		}

	}

	//searches the word for the user's guess and if it isnt contained this 
	//will return -1
	function myLives() {
		str = word;
		n = str.search(userGuess);
		
	}

	myLives();

	//if the myLives function returns a -1 then subtract a guess
	if (n < 0) {
		lives--;
		document.getElementById("score").innerHTML = lives;
	}
	else {
		document.getElementById("score").innerHTML = lives;
	}

	//add the user guesses into the array to print to screen
	letters.push(userGuess);

	
	document.getElementById("letters").innerHTML = letters.toString();

	//function to determine if game is over by searching for blank spaces
	function gameOver() {
		str = guesses.toString();
		m = str.search("_ ");
	}

	gameOver();

	//if there are no blank spaces, user wins, change win # and choose new word, and restart
	if( m < 0 ) {
		alert("Congratulations: you live for another day!");
		numWins++;
		document.getElementById("wins").innerHTML = numWins;
		reset();
		keepGoing();
	}
	

	game.innerHTML=""; 
	printWord();


	//if user runs out of lives before solving, its game over!
	if (lives == 0) {
		alert("Game Over: Hangman!");
		reset();
		keepGoing();
	}
}



}

	
