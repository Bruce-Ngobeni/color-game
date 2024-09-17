// Select HTML elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const h1Element = document.querySelector("h1");
const message = document.querySelector("#message");
const resetButton = document.querySelector('#resetButton');


/**
 * Generates a random RGB color.
 * @returns {string} The random RGB color as a string, e.g., 'rgb(255, 0, 0)'.
 */
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  return `rgb(${red}, ${green}, ${blue})`;
};


/**
 * Generates an array of random RGB colors.
 * @param {number} num - The number of random colors to generate.
 * @returns {Array} An array of randomly generated colors.
 */
const generateRandomColors = (num) => {
  let randomColors = [];
  for (let i = 0; i < num; i++) {
    randomColors.push(generateRandomColor());
  }
  return randomColors;
};


// Set the number of squares (colors) in the game
let num = 6;
// Generate an initial set of random colors
let colors = generateRandomColors(num);


/**
 * Randomly selects a color from the colors array to be the winning color.
 * @returns {string} The randomly selected winning color.
 */
const pickColor = () => colors[Math.floor(Math.random() * num)];


// Pick an initial winning color and display it
let winningColor = pickColor();
colorDisplay.textContent = winningColor;


/**
 * Changes the color of all squares to the given color when the correct color is chosen.
 * @param {string} color - The color to apply to all squares.
 */
const changeColors = (color) => {
  for (let i = 0; i < num; i++) {
    squares[i].style.backgroundColor = color;
  }
};


/**
 * Resets the game by generating new random colors, picking a new winning color,
 * updating the displayed color, and resetting the message and styles.
 */
resetButton.addEventListener('click', function () {
  console.log("Reset button clicked");
  // Generate new colors and pick a new winning color
  colors = generateRandomColors(num);
  winningColor = pickColor();
  colorDisplay.textContent = winningColor;
  h1Element.style.color = "white";
  message.textContent = "";
  
  // Update the colors of the squares
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});


// Add click event listeners to each square
for (let i = 0; i < colors.length; i++) {
  // Set the initial color of each square
  squares[i].style.backgroundColor = colors[i];

  // Add click event to handle user's choice
  squares[i].addEventListener("click", function () {
    const clickedColor = this.style.backgroundColor;

    // If the clicked color matches the winning color
    if (clickedColor === winningColor) {
      h1Element.style.color = winningColor;
      message.textContent = "Correct!";
      changeColors(winningColor); // Change all squares to the winning color
    } else {
      // If the clicked color is incorrect
      message.textContent = "Try again!";
      this.style.backgroundColor = "black"; // Hide the wrong choice
    }
  });
}

