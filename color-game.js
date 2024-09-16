const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)"
];

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const h1Element = document.querySelector("h1")

let winningColor = colors[3];
colorDisplay.textContent = winningColor;

for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;
        console.log("clickd color: ", clickedColor);

        if(clickedColor === winningColor){
            h1Element.style.color = winningColor;
            alert("You won!")
            
        }else{
            alert("You suck!")
        }
    })
}