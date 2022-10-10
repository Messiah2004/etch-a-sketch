let color = "black";
let random = "#"
let click = true;

let input = document.querySelector("input");

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove() );
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "beige";
        
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 1 && input <= 100) {
        populateBoard(input);
        l = 100;
    } else if (input < 1){
        alert("Too little squares!");
    } else {
        alert("Too many squares!");
    }
}

input.addEventListener("change", () => changeSize(input.value));

function colorSquare(){
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        } else if (color === "white") {
            darkenColor();
            this.style.backgroundColor = `hsl(0,0%,${l}%)`
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
        color = choice; 
}

function generateRandomHex() {
    random = "#";
    let symbols = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++){
       random += symbols[Math.floor(Math.random() * 16)]
    }
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "beige" );
    l = 100;
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector(".mode").textContent = "Mode: Coloring"
        } else {
            document.querySelector(".mode").textContent = "Mode: Not Coloring"
        }
    }
}); 

let l = 100;

function darkenColor (){
    if (l > 0) {
       l -= 10;
    } else {
        l += 90;
    }
};