const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const h1Element = document.querySelector("h1");
const message = document.querySelector("#message");
const resetButton = document.querySelector('#resetButton');


const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};


const generateRandomColors = (num) => {
  let randomColors = [];
  for (let i = 0; i < num; i++) {
    randomColors.push(generateRandomColor());
  }

  return randomColors;
};

let num = 6

let colors = generateRandomColors(num);

const pickColor = () => colors[Math.floor(Math.random() * num)];

let winningColor = pickColor();
colorDisplay.textContent = winningColor;


resetButton.addEventListener('click', function(){
  console.log("reset Button clicked")
  colors = generateRandomColors(num);
  winningColor = pickColor();
  colorDisplay.textContent = winningColor;
  h1Element.style.color = "white"
  message.textContent = "";
  
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
  }
})


for (let i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function () {
    const clickedColor = this.style.backgroundColor;

    if (clickedColor === winningColor) {
      h1Element.style.color = winningColor;
      message.textContent = "Correct!";
      chageColors(winningColor);
    } else {
      message.textContent = "Try again!";
      this.style.backgroundColor = "black";
    }
  });
}

const chageColors = (color) => {
    for (let i = 0; i < num; i++) {
        squares[i].style.backgroundColor = color;
        
    }
//   squares.forEach((square) => {
//     square.style.backgroundColor = color;
//   });
};
