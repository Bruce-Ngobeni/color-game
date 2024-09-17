// Select HTML elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const h1Element = document.querySelector("h1");
const message = document.querySelector("#message");
const resetButton = document.querySelector("#resetButton");
const easyButton = document.querySelector("#easyButton");
const hardButton = document.querySelector("#hardButton");


// Set initial game state
let numSquares = 6;
let colors = [];
let winningColor = "";


// Set default difficulty to 'hard'
hardButton.classList.add("selected");


/**
 * Generates a random RGB color.
 * @returns {string} Random RGB color in the format 'rgb(r, g, b)'.
 */
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};


/**
 * Generates an array of random RGB colors.
 * @param {number} num - Number of colors to generate.
 * @returns {Array<string>} Array of randomly generated RGB colors.
 */
const generateRandomColors = (num) => {
  return Array.from({ length: num }, generateRandomColor);
};


/**
 * Randomly selects a winning color from the generated colors.
 * @returns {string} The selected winning color.
 */
const pickColor = () => colors[Math.floor(Math.random() * colors.length)];


/**
 * Changes all squares' colors to the winning color.
 * @param {string} color - The color to apply to all squares.
 */
const changeColors = (color) => {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  });
};


/**
 * Updates the squares with new colors, or hides them if no color is available.
 */
const updateSquares = () => {
  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.backgroundColor = colors[index];
      square.style.display = "block";
    } else {
      square.style.backgroundColor = "black";
    }
  });
};


/**
 * Resets the game with new colors and updates UI elements.
 */
const resetGame = () => {
  colors = generateRandomColors(numSquares);
  winningColor = pickColor();
  colorDisplay.textContent = winningColor;
  h1Element.style.backgroundColor = "steelblue";
  message.textContent = "";
  message.style.color = "steelblue";
  resetButton.textContent = "New Colors";
  updateSquares();
};


/**
 * Handles the click event on each square to determine if the user selected the correct color.
 */
const addSquareListeners = () => {
  squares.forEach((square) => {
    square.addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;

      if (clickedColor === winningColor) {
        message.textContent = "Correct!";
        h1Element.style.backgroundColor = winningColor;
        changeColors(winningColor);
        message.style.color = winningColor;
        resetButton.textContent = "Play Again?";
      } else {
        message.textContent = "Try Again!";
        this.style.backgroundColor = "black"; // Hide incorrect square
      }
    });
  });
};


/**
 * Sets the game mode based on the difficulty level.
 * @param {string} mode - The difficulty level ('easy' or 'hard').
 */
const setGameMode = (mode) => {
  if (mode === "easy") {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
  } else if (mode === "hard") {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
  }
  resetGame();
};


// Add event listeners for difficulty buttons
easyButton.addEventListener("click", () => setGameMode("easy"));
hardButton.addEventListener("click", () => setGameMode("hard"));


// Add event listener for reset button
resetButton.addEventListener("click", resetGame);


// Initialize the game
addSquareListeners();
resetGame();




