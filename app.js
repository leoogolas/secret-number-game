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

// INICIO DAS ATIVIDADES

// function indice(altura, peso) {
// 	let imc = peso / altura ** altura;
// 	console.log(imc);
// }

// indice(1.7, 90);

// function conversao(real) {
// 	let dolar = real * 4.8;
// 	console.log(dolar);
// }
// conversao(50);

// function medidas(altura, largura) {
// 	let perimetro = altura * 2 + largura * 2;
// 	let area = altura * largura;
// 	console.log("perimetro e igual a ", perimetro, "area é igual a ", area);
// }
// medidas(30, 40);

// function tabuada(numero) {
// 	let resultado = document.querySelector("p");
// 	resultado.innerHTML = "";
// 	for (let i = 1; i <= 10; i++) {
// 		let calculo = numero * i;
// 		resultado.innerHTML += calculo + "<br>";
// 	}
// }
// tabuada(5);

// function fatorial(numero) {
// 	let resultado = 1;
// 	for (let i = numero; i >= 1; i--) resultado *= i;
// 	console.log(resultado);
// }
// fatorial(5);

let listagenerica = [];
let linguagensDeProgramacao = ["Javascript", "C", "C++", "Kotlin", "Python"];
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
console.log(linguagensDeProgramacao[7]);
