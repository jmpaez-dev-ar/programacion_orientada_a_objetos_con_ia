// script.js

// Get game elements
const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');

// Game variables
let ballX = 390, ballY = 190; // Ball position
let ballSpeedX = 4, ballSpeedY = 4; // Ball speed
let paddle1Y = 150, paddle2Y = 150; // Paddle positions
const paddleSpeed = 10; // Paddle speed
const paddleHeight = 100;
const gameHeight = 400;
let score1 = 0, score2 = 0; // Scores

// Key states
const keys = {};

// Detect key presses
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Game loop
function gameLoop() {
    // Move paddles
    if (keys['a'] && paddle1Y > 0) paddle1Y -= paddleSpeed;
    if (keys['z'] && paddle1Y < gameHeight - paddleHeight) paddle1Y += paddleSpeed;
    if (keys['arrowup'] && paddle2Y > 0) paddle2Y -= paddleSpeed;
    if (keys['arrowdown'] && paddle2Y < gameHeight - paddleHeight) paddle2Y += paddleSpeed;

    // Update paddle positions
    paddle1.style.top = `${paddle1Y}px`;
    paddle2.style.top = `${paddle2Y}px`;

    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top/bottom walls
    if (ballY <= 0 || ballY >= gameHeight - 15) ballSpeedY *= -1;

    // Ball collision with paddles
    if (
        ballX <= 25 && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight ||
        ballX >= 760 && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight
    ) {
        ballSpeedX *= -1;
    }

    // Check scoring
    if (ballX <= 0) {
        score2++;
        resetBall();
    }
    if (ballX >= 785) {
        score1++;
        resetBall();
    }

    // Update ball position
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // Update score display
    score1Display.textContent = score1;
    score2Display.textContent = score2;

    requestAnimationFrame(gameLoop);
}

// Reset ball position and speed
function resetBall() {
    ballX = 390;
    ballY = 190;
    ballSpeedX = ballSpeedX > 0 ? -4 : 4;
    ballSpeedY = ballSpeedY > 0 ? -4 : 4;
}

// Start the game loop
gameLoop();
