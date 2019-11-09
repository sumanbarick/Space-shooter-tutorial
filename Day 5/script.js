
// ALL THE VARIABLES
var game = {};

// ARENA
game.arena = {};
game.arena.Element = document.getElementById('game-arena');
game.arena.y = 0;
game.arena.speed = 2;

// ROCKET
game.rocket = {};
game.rocket.Element = document.getElementById('rocket');
game.rocket.prevX = 288;
game.rocket.x = 288;
game.rocket.y = 515;
game.rocket.speed = 5;
game.rocket.width = 40;

// BULLET
game.bullet = {};
game.bullet.Element = document.getElementById('bullet');
game.bullet.width = 20;
game.bullet.x = game.rocket.x + (game.rocket.width - game.bullet.width) / 2;
game.bullet.y = game.rocket.y - game.bullet.width;
game.bullet.speed = 15;
game.bullet.isAlive = false;


init();

/**
 * DO ALL INITIALIZATION HERE
 * THEN START THE GAME LOOP
 */
function init () {
    initAllVars();
    gameLoop();
}

/**
 * This function will set the initial position for all the variables
 */
function initAllVars () {
    game.arena.Element.style.backgroundPositionY = game.arena.y + 'px';

    //ROCKET
    game.rocket.Element.style.left = game.rocket.x + 'px';
    game.rocket.Element.style.top = game.rocket.y + 'px';
    game.rocket.Element.style.width = game.rocket.width + 'px';

    //BULLET
    game.bullet.Element.style.left = game.bullet.x + 'px';
    game.bullet.Element.style.top = game.bullet.y + 'px';
    game.bullet.Element.style.width = game.bullet.width + 'px';
    game.bullet.Element.style.height = game.bullet.width + 'px';
}

/**
 * This function will move the arena background, i.e The Sky
 * To give a feeling of movement
 */
function moveArenaBg () {
    game.arena.y += game.arena.speed;
    game.arena.Element.style.backgroundPositionY = game.arena.y + 'px';
}

/**
 * Do all the repeated stuff here
 */
function gameLoop () {
    moveArenaBg();
    renderRocket();
    moveAndRenderBullet();
    setTimeout(gameLoop, 1000/30);
}

function renderRocket () {
    if(game.rocket.prevX !== game.rocket.x) {
        game.rocket.Element.style.left = game.rocket.x + 'px';
        game.rocket.prevX = game.rocket.x;
    }
}

function moveRocketLeft () {
    game.rocket.x -= game.rocket.speed;
}

function moveRocketRight () {
    game.rocket.x += game.rocket.speed;
}

function fireBullet () {
    if(!game.bullet.isAlive) {
        resetBullet();
        game.bullet.Element.style.left = game.bullet.x + 'px';
        game.bullet.Element.style.display = 'inline-block';
        game.bullet.isAlive = true;
    }
}

function moveAndRenderBullet () {
    if(game.bullet.isAlive) {
        game.bullet.y -= game.bullet.speed;
        game.bullet.Element.style.top = game.bullet.y + 'px';

        if(game.bullet.y < -100) {
            game.bullet.isAlive = false;
        }
    }
}

function resetBullet () {
    game.bullet.x = game.rocket.x + (game.rocket.width - game.bullet.width) / 2;
    game.bullet.y = game.rocket.y - game.bullet.width;
}

