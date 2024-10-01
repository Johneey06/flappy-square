//Store Canvas
const canvas = document.querySelector("#my-canvas");
//Store 2D rendering context
const ctx = canvas.getContext("2d");

//Square Size and Position
const width = 70;
const height = 70;
let x = (canvas.width - width) / 2;
let y = 30;

let rightPressed = false;
let leftPressed = false;

//Square fall speed
let dy = 3;

//Track Score
let score = 0;

function drawSquare() {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = "#00ffff";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSquare();

    y += dy;

    if (rightPressed) {
        x = Math.min(x + 7, canvas.width - width);
    } else if (leftPressed) {
        x = Math.max(x - 7, 0)
    }

    requestAnimationFrame(draw)
}

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

draw();