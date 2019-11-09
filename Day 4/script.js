
// ALL THE VARIABLES
var game = {};
game.arena = {};
game.arena.Element = document.getElementById('game-arena');
game.arena.y = 0;
game.arena.speed = 2;

game.rocket = {};
game.rocket.Element = document.getElementById('rocket');
game.rocket.prevX = 288;
game.rocket.x = 288;
game.rocket.y = 515;
game.rocket.speed = 5;
game.rocket.width = 40;

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

