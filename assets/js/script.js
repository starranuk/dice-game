// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });

        }
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
        
    runGame("level-1");
    

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates random numbers between 1 and 6
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
	let num3 = Math.floor(Math.random() * 6) + 1;
    let num4 = Math.floor(Math.random() * 6) + 1;
	let num5 = Math.floor(Math.random() * 6) + 1;
    let num6 = Math.floor(Math.random() * 6) + 1;
	
	 
    if (gameType === "level-1") {
		let gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		let image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		let image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
        let image3 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-3").innerHTML = image3;
        addTwoDice(num1, num2); 
    } else if (gameType === "level-2") {
		let gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		let image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		let image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		let image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
        let image4 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        let image5 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        let image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addThreeDice(num1, num2, num3);	
    }   else if (gameType === "level-3") {
		let gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		let image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		let image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		let image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		let image4 = `<img src="assets/images/dice${num4}.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        let image5 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        let image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addFourDice(num1, num2, num3, num4);
    }   else if (gameType === "level-4") {
		let gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		let image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		let image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		let image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		let image4 = `<img src="assets/images/dice${num4}.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        let image5 = `<img src="assets/images/dice${num5}.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        let image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addFiveDice(num1, num2, num3, num4, num5);
    } else if (gameType === "division") {
        num1 = num1 * num2;
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) 
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(gameType) {
let operand1 = parseInt(document.getElementById('operand1').innerText);
let operand2 = parseInt(document.getElementById('operand2').innerText);
let operand3 = parseInt(document.getElementById('operand3').innerText);
let operand4 = parseInt(document.getElementById('operand4').innerText);
let calcLevel = document.getElementById('level').innerText;
    
    if (calcLevel === 'level-1') {
        return [operand1 + operand2, "level-1"];
    } else if(calcLevel === 'level-2') {
        return [(operand1 + operand2) + operand3, "level-2"];
	} else if(calcLevel === 'level-3') {
        return [(operand1 + operand2 + operand3 + operand4), "level-3"];
       } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

function addTwoDice(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function addThreeDice(operand1, operand2, operand3) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
	document.getElementById('operand3').textContent = operand3;
    document.getElementById('operator').textContent = "+";
}

function addFourDice(operand1, operand2, operand3, operand4) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
	document.getElementById('operand3').textContent = operand3;
	document.getElementById('operand4').textContent = operand4;
    document.getElementById('operator').textContent = "+";

}
function addFiveDice(operand1, operand2, operand3, operand4, operand5) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
	document.getElementById('operand3').textContent = operand3;
	document.getElementById('operand4').textContent = operand4;
    document.getElementById('operand5').textContent = operand5;
    document.getElementById('operator').textContent = "+";

}

function addSixDice(operand1, operand2, operand3, operand4, operand5, operand6) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
	document.getElementById('operand3').textContent = operand3;
	document.getElementById('operand4').textContent = operand4;
    document.getElementById('operand5').textContent = operand5;
    document.getElementById('operand6').textContent = operand6;
    document.getElementById('operator').textContent = "+";

}