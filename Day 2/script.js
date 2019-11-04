
// ALL THE VARIABLES
var game = {};
game.arena = {};
game.arena.Element = document.getElementById('game-arena');
game.arena.y = 0;
game.arena.speed = 2;

init();

/**
 * DO ALL INITIALIZATION HERE
 * THEN START THE GAME LOOP
 */
function init () {
    initArenaBgPosY();
    gameLoop();
}

/**
 * This function will set the initial position for the arena backgound i.e. The Sky
 */
function initArenaBgPosY () {
    game.arena.Element.style.backgroundPositionY = game.arena.y + 'px';
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
    setTimeout(gameLoop, 1000/30);
}

