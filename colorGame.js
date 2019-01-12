var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset")
var modeBtns = document.querySelectorAll(".mode");
init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			//console.log((clickedColor))
			if (clickedColor === pickedColor) {
				//alert("correcct")
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		})
	}
}

function setUpModeButtons() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function () {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		})
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		h1.style.backgroundColor = "steelblue";
	}
}

resetButton.addEventListener("click", function () {

	reset();
})

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var randomNo = Math.floor(Math.random() * colors.length);
	return colors[randomNo];
}

function generateRandomColors(x) {
	var arr = [];
	for (var i = 0; i < x; i++) {
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var colorGenerated = "rgb(" + r + ", " + g + ", " + b + ")";
	//console.log(colorGenerated)
	return colorGenerated;
}