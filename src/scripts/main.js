var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
 
var speed = 5;
 
var x = Math.floor(Math.random() * 480) + 10;
var y = 0;
var dy = 2;
var score = 0;
 
var playerHeight = 10;
var playerWidth = 80;
var playerX = (canvas.width-playerWidth) / 2;
 
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
 
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ECEFF4";
    ctx.fill();
    ctx.closePath();
    if (y > 490) {
 
        if (x > playerX - 5 && x < playerX + 85) {
            score++;
            if (score % 5 == 0) {
                dy = dy + 0.5;
            }
        }
 
        else {
            alert ("Game Over! Score: " + score);
            location.reload();
        }
        myHeading.textContent = score;
        y = 0;
        x = Math.floor(Math.random() * 480) + 10;   
    }
}
 
function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, canvas.height-playerHeight, playerWidth, playerHeight); 
    ctx.fillStyle = "#ECEFF4";
    ctx.fill();
    ctx.closePath();
}
 
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawPlayer();
    y += dy;
 
    if(rightPressed) {
        playerX += speed;
        if (playerX + playerWidth > canvas.width) {
            playerX = canvas.width - playerWidth;
        }
    }
    else if(leftPressed) {
        playerX -= speed;
        if (playerX < 0){
            playerX = 0;
        }
    }
    if(upPressed) {
        speed = 10;
    }
    else if (downPressed) {
        speed = 2.5;
    }
    else {
        speed = 5;
    }
}
 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
 
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = true;
    }
}
 
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = false;
    }
}
 
window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

const myHeading = document.querySelector(".score");
setInterval(draw, 10);
