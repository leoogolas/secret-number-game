let listOfchosenNumber = [];
let limitNumber = 100;
let secretNumber = generateRandomNumber();
let attempt = 1;

function showTextonScreen(tag, text) {
	let field = document.querySelector(tag);
	field.innerHTML = text;
	responsiveVoice.speak(text, "US English Female", { rate: 1.2 });
}

function displayWelcomeMessage() {
	showTextonScreen("h1", "Secret Number");
	showTextonScreen("p", "Guess the number between 1 and 100!");
}
displayWelcomeMessage();
function verifyGuess() {
	let guess = document.querySelector("input").value;
	let attemptWord = attempt > 1 ? "attempts" : "attempt";

	if (guess == secretNumber) {
		showTextonScreen("h1", "Correct!");
		showTextonScreen(
			"p",
			`You discovered the secret number in ${attempt} ${attemptWord}.`
		);
		document.getElementById("restart").removeAttribute("disabled");
	} else if (guess > secretNumber) {
		showTextonScreen("h1", "Wrong!");
		showTextonScreen("p", `The secret number is lower than ${guess}.`);
	} else if (guess < secretNumber) {
		showTextonScreen("h1", "Wrong!");
		showTextonScreen("p", `The secret number is higher than ${guess}.`);
	}
	attempt++;
	cleanImput();
}

function generateRandomNumber() {
	let chosenNumber = parseInt(Math.random() * limitNumber + 1);
	let ammountOfElements = listOfchosenNumber.length;
	if (ammountOfElements == limitNumber) {
		listOfchosenNumber = [];
	}
	if (listOfchosenNumber.includes(chosenNumber)) {
		return generateRandomNumber();
	} else {
		listOfchosenNumber.push(chosenNumber);
		console.log(listOfchosenNumber);
		return chosenNumber;
	}
}
function cleanImput() {
	guess = document.querySelector("input");
	guess.value = "";
}
function restartGame() {
	secretNumber = generateRandomNumber();
	cleanImput();
	attempt = 1;
	displayWelcomeMessage();
	document.getElementById("restart").setAttribute("disabled", true);
}

