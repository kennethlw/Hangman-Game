var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var answers = ["rooster", "monkey", "sheep", "horse", "giraffe", "shark", "iguana", "turtle", "raccoon", "cheetah"];

var word;
var userGuess;
var guesses = [];
var secretWord = [];
var letters = [];
var lives = 6;
var correctGuess = 0;

alert("Press any key to start playing.");

//select a random word for hangman from the array
word = answers[Math.floor(Math.random() * answers.length)];
secretWord.push(word);
guesses.push(word);


//replace the entirety of the word with blanks 
for (var i = 0; i < word.length; i++) {
	guesses[i] = "_ ";
}

// prints the blanks in the html 
function printWord(){
	for (var i = 0; i < word.length; i++) {
	var game = document.getElementById("game");
	var create = document.createTextNode(guesses[i]);
	game.appendChild(create);
	}
}


var game = document.getElementById("game");
		game.innerHTML = "";
		printWord();


document.onkeyup = function(event) {	

	//assigns whatever key the user presses into this var
	var userGuess = event.key;

	//save the guesses in an array
	//guesses.push(userGuess);

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

	letters.push(userGuess);

	
	document.getElementById("letters").innerHTML = "<h2><p>Letters Guessed: </p></h2>" + letters.toString();


	console.log("correct guess is" + correctGuess);

	if(correctGuess == word.length)
	{
		alert("Congratulations: you live for another day!");
		location.reload();
	}

	if(correctGuess < 1 ) {
		lives --;
		document.getElementById("score").innerHTML = "<h2><p>Remaining lives: </p></h2>" + lives;
	}


	var ratefeld = document.getElementById("game");
	game.innerHTML=""; 
	printWord();

	if (lives == 0) {
		alert("Game Over: Hangman!");
		location.reload();	
	}
}
	
	
