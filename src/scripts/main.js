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
 
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ECEFF4";
    ctx.fill();
    ctx.closePath();
    if (y + dy > 507.5) {
 
        if (x > playerX && x < playerX + 80) {
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
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}
 
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}
 
const myHeading = document.querySelector('h1');
setInterval(draw, 10);