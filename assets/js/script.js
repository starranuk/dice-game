/**This project was inspired by the Code Institute Love Maths walk through by AJGreaves.
 * The writing data to the DOM and the inclusion of SweetAlerts was suggested by my tutor Brian Macharia. 
 * 
 * */

/** When the page loads event listeners wait for button actions triggered by the player. */
 document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.getElementsByTagName("button");

	for (const button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "reset") { /*SweetAlert re-set game warning message*/
				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to undo this action and will lose your scores!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, reset the game!'
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire(
							'Your Game Settings Have Been Deleted',
							'success'

						);
						location.reload();
					}
				});
			} else if (this.getAttribute("data-type") === "instructions") { /*SweetAlert game instructions*/
				Swal.fire({
					title: '<strong><u>Game Instructions</u></strong>',
					icon: 'info',
					html: '<p>Enter your name</p> ' +
						'<p>Select a level</p> ' +
						'<p>Add the dice together</p>' +
						'<p>Enter your answer and press the submit button</p>',
					showCloseButton: true,
					showCancelButton: false,
					focusConfirm: false,
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
					confirmButtonAriaLabel: 'Thumbs up, great!',
					cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
					cancelButtonAriaLabel: 'Thumbs down'
				});
			} else if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				const gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});

	}
	document.getElementById("answer-box").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			checkAnswer();
		}
	});

	runGame('level-1');


});

/**
 * The level 1 game with single dice called when the script is first loaded
 * and after the user's answer has been processed
 **/
function runGame(gameType) {

	document.getElementById("answer-box").value = "";
	document.getElementById("answer-box").focus();

	// Creates random numbers between 1 and 6
	const num1 = Math.floor(Math.random() * 6) + 1;
	const num2 = Math.floor(Math.random() * 6) + 1;
	const num3 = Math.floor(Math.random() * 6) + 1;
	const num4 = Math.floor(Math.random() * 6) + 1;
	const num5 = Math.floor(Math.random() * 6) + 1;
	const num6 = Math.floor(Math.random() * 6) + 1;
	// Converts from integer to string to be used in HTML data attribute
	let strnum1 = num1.toString();
	let strnum2 = num2.toString();
	let strnum3 = num3.toString();
	let strnum4 = num4.toString();
	let strnum5 = num5.toString();
	let strnum6 = num6.toString();

	/** 
	 * Adds extra dice as each level is called and also inserts a blank image to replace previous higher level games in order to remove the issue of cached images.
     * Pushes the converted integer to a string to the DOM.
     * Sets the different scoring for each game level.
	 * */
	if (gameType === "level-1") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		roundScore.dataset.scoreValue = `${"1"}`;

	} else if (gameType === "level-2") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		dice2.dataset.opval = `${strnum2}`;
		roundScore.dataset.scoreValue = `${"2"}`;


	} else if (gameType === "level-3") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png" alt="${num3}">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		dice2.dataset.opval = `${strnum2}`;
		dice3.dataset.opval = `${strnum3}`;
		roundScore.dataset.scoreValue = `${"3"}`;


	} else if (gameType === "level-4") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png" alt="${num3}">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png" alt="${num4}">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		dice2.dataset.opval = `${strnum2}`;
		dice3.dataset.opval = `${strnum3}`;
		dice4.dataset.opval = `${strnum4}`;
		roundScore.dataset.scoreValue = `${"4"}`;

	} else if (gameType === "level-5") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png" alt="${num3}">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png" alt="${num4}">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/dice${num5}.png" alt="${num5}">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/blank.png" alt="blank to clear cache">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		dice2.dataset.opval = `${strnum2}`;
		dice3.dataset.opval = `${strnum3}`;
		dice4.dataset.opval = `${strnum4}`;
		dice5.dataset.opval = `${strnum5}`;
		roundScore.dataset.scoreValue = `${"5"}`;

	} else if (gameType === "level-6") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png" alt="${num3}">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png" alt="${num4}">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/dice${num5}.png" alt="${num5}">`;
		document.getElementById("dice-5").innerHTML = image5;
		const image6 = `<img src="assets/images/dice${num6}.png" alt="${num6}">`;
		document.getElementById("dice-6").innerHTML = image6;
		dice1.dataset.opval = `${strnum1}`;
		dice2.dataset.opval = `${strnum2}`;
		dice3.dataset.opval = `${strnum3}`;
		dice4.dataset.opval = `${strnum4}`;
		dice5.dataset.opval = `${strnum5}`;
		dice6.dataset.opval = `${strnum6}`;
		roundScore.dataset.scoreValue = `${"6"}`;

	} else {
		alert(`Unknown game type: ${gameType}`);
		throw `Unknown game type: ${gameType}. Aborting!`;
	}

}

/**
 * Gets the points allocated dependant on Level being played directly from the DOM and converts back to integer. 
 * Checks the answer against the calculateCorrectAnswer array and displays the players name, players answer, whether the answer is correct, 
 * the correct answer and the points won or lost
 */
function checkAnswer() {
	let roundpoints = roundScore.dataset.scoreValue;
	let player = document.getElementById("name-box").value;
	let userAnswer = parseInt(document.getElementById("answer-box").value);
	let correctAnswer = addDice();
	let isCorrect = userAnswer === correctAnswer[0];

	if (isCorrect) {
		Swal.fire(`Well done ${player}, ${userAnswer} is the correct answer. Your points score is ${roundpoints}`);
		incrementScore();
	} else {
		Swal.fire(`Sorry ${userAnswer} is incorrect. The dice add up to ${correctAnswer[0]}, Your points score ${roundpoints} goes to the Computer .  Have another go ${player}, you can do it`);
		incrementWrongAnswer();
	}

	runGame(correctAnswer[1]);

}

/**
 * Gets the operands (the numbers) as a string directly from the dom, converts them to integers
 * and returns the correct answer. 
 */
function addDice(gameType) {
	// Converts string from HTML data attribute to integer 
	let number1 = dice1.dataset.opval;
	let number2 = dice2.dataset.opval;
	let number3 = dice3.dataset.opval;
	let number4 = dice4.dataset.opval;
	let number5 = dice5.dataset.opval;
	let number6 = dice6.dataset.opval;
	let operand1 = parseInt(number1);
	let operand2 = parseInt(number2);
	let operand3 = parseInt(number3);
	let operand4 = parseInt(number4);
	let operand5 = parseInt(number5);
	let operand6 = parseInt(number6);
	let calcLevel = document.getElementById('level').innerText;

	if (calcLevel === 'level-1') {
		return [operand1, 'level-1'];
	} else if (calcLevel === 'level-2') {
		return [operand1 + operand2, 'level-2'];
	} else if (calcLevel === 'level-3') {
		return [(operand1 + operand2) + operand3, 'level-3'];
	} else if (calcLevel === 'level-4') {
		return [(operand1 + operand2 + operand3 + operand4), 'level-4'];
	} else if (calcLevel === 'level-5') {
		return [(operand1 + operand2 + operand3 + operand4 + operand5), 'level-5'];
	} else if (calcLevel === 'level-6') {
		return [(operand1 + operand2 + operand3 + operand4 + operand5 + operand6), 'level-6'];
	} else {
		alert(`Unimplemented operator ${operator}`);
		throw `Unimplemented operator ${operator}. Aborting!`;
	}

}

/**
 * Gets the current score from the DOM converts from string to integer and increments it by the points allocated to that level
 */
function incrementScore() {
	let roundpoints = roundScore.dataset.scoreValue;
	let points = parseInt(roundpoints);

	let rollingScore = parseInt(document.getElementById("score").innerText) + points;
	document.getElementById("score").innerText = rollingScore;

}

/**
 * Gets the current score from the DOM converts from string to integer and increments it by the points allocated to that level
 */
function incrementWrongAnswer() {
	let roundpoints = roundScore.dataset.scoreValue;
	let points = parseInt(roundpoints);

	let rollingScore = parseInt(document.getElementById("incorrect").innerText) + points;
	document.getElementById("incorrect").innerText = rollingScore;

}

