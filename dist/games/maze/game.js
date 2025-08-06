const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const winMessage = document.getElementById('win-message');

// Размеры холста
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Игровые переменные
const ball = {
    x: 50,
    y: 50,
    radius: 15,
    color: '#FF6B6B',
    speed: 0,
    vx: 0,
    vy: 0
};

const hole = {
    x: canvas.width - 60,
    y: canvas.height - 60,
    radius: 25,
    color: '#4ECDC4'
};

const obstacles = [
    { x: 200, y: 0, width: 20, height: 300 },
    { x: 400, y: 150, width: 20, height: 300 },
    { x: 100, y: 400, width: 300, height: 20 }
];

let isGameOver = false;
let isWin = false;

// Управление через наклон телефона
window.addEventListener('deviceorientation', handleOrientation);
// Для ПК/если нет гироскопа — управление стрелками
window.addEventListener('keydown', handleKeyDown);

// Для мобильных свайпов
let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

canvas.addEventListener('touchmove', (e) => {
    if (isGameOver || isWin) return;
    e.preventDefault();
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    
    ball.vx = (touchX - touchStartX) * 0.1;
    ball.vy = (touchY - touchStartY) * 0.1;
});

function handleOrientation(e) {
    if (isGameOver || isWin) return;
    // gamma — наклон влево-вправо, beta — вперед-назад
    ball.vx = e.gamma * 0.2;
    ball.vy = e.beta * 0.2;
}

function handleKeyDown(e) {
    if (isGameOver || isWin) return;
    const speed = 5;
    switch(e.key) {
        case 'ArrowLeft': ball.vx = -speed; break;
        case 'ArrowRight': ball.vx = speed; break;
        case 'ArrowUp': ball.vy = -speed; break;
        case 'ArrowDown': ball.vy = speed; break;
    }
}

function update() {
    if (isGameOver || isWin) return;
    
    // Движение шарика
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    // Трение (замедление)
    ball.vx *= 0.98;
    ball.vy *= 0.98;
    
    // Границы экрана
    if (ball.x < ball.radius) ball.x = ball.radius;
    if (ball.x > canvas.width - ball.radius) ball.x = canvas.width - ball.radius;
    if (ball.y < ball.radius) ball.y = ball.radius;
    if (ball.y > canvas.height - ball.radius) ball.y = canvas.height - ball.radius;
    
    // Проверка столкновений с препятствиями
    for (const obs of obstacles) {
        if (
            ball.x + ball.radius > obs.x &&
            ball.x - ball.radius < obs.x + obs.width &&
            ball.y + ball.radius > obs.y &&
            ball.y - ball.radius < obs.y + obs.height
        ) {
            // Шарик упал в яму? (можно добавить больше проверок)
            isGameOver = true;
            setTimeout(resetGame, 1000);
        }
    }
    
    // Проверка победы (достиг дырки)
    const distanceToHole = Math.sqrt(
        Math.pow(ball.x - hole.x, 2) + Math.pow(ball.y - hole.y, 2)
    );
    if (distanceToHole < ball.radius + hole.radius) {
        isWin = true;
        winMessage.style.display = 'block';
    }
}

function draw() {
    // Очистка экрана
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем препятствия
    ctx.fillStyle = '#888';
    for (const obs of obstacles) {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    }
    
    // Рисуем "дырку" (финиш)
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
    ctx.fillStyle = hole.color;
    ctx.fill();
    
    // Рисуем шарик
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    
    if (isGameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFF';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Упс! Попробуй ещё раз!', canvas.width / 2, canvas.height / 2);
    }
}

function resetGame() {
    ball.x = 50;
    ball.y = 50;
    ball.vx = 0;
    ball.vy = 0;
    isGameOver = false;
    isWin = false;
    winMessage.style.display = 'none';
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();

// Ресайз при повороте экрана
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});