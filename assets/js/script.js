/**This project was inspired by the Code Institute Love Maths walk through by AJGreaves.  
 * The page loads and event listeners wait for button actions triggered by the user.
 * */

 document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset") {
		    Swal.fire({
				  title: 'Are you sure?',
				  text: "You won't be able to revert this!",
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
				  if (result.isConfirmed) {
					Swal.fire(
					  'Deconsted!',
					  'Your file has been delete.',
					  'success'
					)
					location.reload();
				  }
				})
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
        
    runGame("level-1");
    

});

/**
 * The level 1 game with only two dice called when the script is first loaded
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
	
	 /** 
      * Adds extra dice as each level is called and also inserts a blank image to replace previous higher level games in order to remove the issue of cached images
      * 
      * */
      
    if (gameType === "level-1") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel;
		const image1 = `<img src="assets/images/dice${num1}.png" alt="${num1}">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png" alt="${num2}">`;
		document.getElementById("dice-2").innerHTML = image2;
        const image3 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        const image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
       
        addTwoDice(num1, num2); 
    } else if (gameType === "level-2") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		const image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-4").innerHTML = image4;
		const image5 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        const image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
       
        addThreeDice(num1, num2, num3);	
    }   else if (gameType === "level-3") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		const image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        const image5 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        const image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addFourDice(num1, num2, num3, num4);
    }   else if (gameType === "level-4") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		const image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        const image5 = `<img src="assets/images/dice${num5}.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        const image6 = `<img src="assets/images/blank.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addFiveDice(num1, num2, num3, num4, num5);
		}   else if (gameType === "level-5") {
		const gameLevel = gameType;
		document.getElementById("level").innerHTML = gameLevel; 
		const image1 = `<img src="assets/images/dice${num1}.png">`;
		document.getElementById("dice-1").innerHTML = image1;
		const image2 = `<img src="assets/images/dice${num2}.png">`;
		document.getElementById("dice-2").innerHTML = image2;
		const image3 = `<img src="assets/images/dice${num3}.png">`;
		document.getElementById("dice-3").innerHTML = image3;
		const image4 = `<img src="assets/images/dice${num4}.png">`;
		document.getElementById("dice-4").innerHTML = image4;
        const image5 = `<img src="assets/images/dice${num5}.png">`;
		document.getElementById("dice-5").innerHTML = image5;
        const image6 = `<img src="assets/images/dice${num6}.png">`;
		document.getElementById("dice-6").innerHTML = image6;
        addSixDice(num1, num2, num3, num4, num5, num6);
    } else if (gameType === "division") {
        num1 = num1 * num2;
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let correctAnswer = addDice();
    let isCorrect = userAnswer === correctAnswer[0];

    if (isCorrect) {
        Swal.fire(`Well done ${userAnswer} is the correct answer`);
        incrementScore();
    } else {
        Swal.fire(`Sorry ${userAnswer} is incorrect. The dice add up to ${correctAnswer[0]} Have another go, you can do it`);
        incrementWrongAnswer();
    }

    runGame(correctAnswer[1]);

}

/**
 * Gets the operands (the numbers) 
 * directly from the dom, and returns the correct answer. These are only used for calculations and are not displayed. 
 *They still need to be in the dom color is set to background
 */
function addDice(gameType) {
let operand1 = parseInt(document.getElementById('operand1').innerText);
let operand2 = parseInt(document.getElementById('operand2').innerText);
let operand3 = parseInt(document.getElementById('operand3').innerText);
let operand4 = parseInt(document.getElementById('operand4').innerText);
let operand5 = parseInt(document.getElementById('operand5').innerText);
let operand6 = parseInt(document.getElementById('operand6').innerText);
let calcLevel = document.getElementById('level').innerText;
    
    if (calcLevel === 'level-1') {
        return [operand1 + operand2, "level-1"];
    } else if(calcLevel === 'level-2') {
        return [(operand1 + operand2) + operand3, "level-2"];
	} else if(calcLevel === 'level-3') {
        return [(operand1 + operand2 + operand3 + operand4), "level-3"];
	} else if(calcLevel === 'level-4') {
        return [(operand1 + operand2 + operand3 + operand4 + operand5), "level-4"];
	} else if(calcLevel === 'level-5') {
        return [(operand1 + operand2 + operand3 + operand4 + operand5 + operand6), "level-5"];
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