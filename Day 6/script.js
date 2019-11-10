
// ALL THE VARIABLES
var game = {};

// ARENA
game.arena = {};
game.arena.width = window.innerWidth;
game.arena.Element = document.getElementById('game-arena');
game.arena.y = 0;
game.arena.speed = 2;

// ROCKET
game.rocket = {};
game.rocket.Element = document.getElementById('rocket');
game.rocket.width = 40;
game.rocket.prevX = (game.arena.width - game.rocket.width) / 2;
game.rocket.x = game.rocket.prevX;
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

// ENEMY
game.enemy = {};
game.enemy.Container = document.getElementById('enemy-container');
game.enemy.width = 40;
game.enemy.list = [];

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
    // ARENA
    game.arena.Element.style.backgroundPositionY = game.arena.y + 'px';
    game.arena.Element.style.width = game.arena.width + 'px';

    //ROCKET
    game.rocket.Element.style.left = game.rocket.x + 'px';
    game.rocket.Element.style.top = game.rocket.y + 'px';
    game.rocket.Element.style.width = game.rocket.width + 'px';

    //BULLET
    game.bullet.Element.style.left = game.bullet.x + 'px';
    game.bullet.Element.style.top = game.bullet.y + 'px';
    game.bullet.Element.style.width = game.bullet.width + 'px';
    game.bullet.Element.style.height = game.bullet.width + 'px';

    // ENEMY
    createEnemies();
    renderEnemies();
    console.log(game.enemy.list);
}


function createEnemies () {
    var enemiesPerLine = 4;
    var gap = 40;
    var topGap = 20;
    var totalLine = 5;
    var totalWidthForEnemy = (game.enemy.width + gap);
    var spaceOnLeft = (game.arena.width - (totalWidthForEnemy * enemiesPerLine)) / 2;

    for(var l=0; l<totalLine; l++) {
        for(var e=0; e < enemiesPerLine; e++) {
            var newEnemy = {};
            newEnemy.x = spaceOnLeft + (totalWidthForEnemy * e);
            newEnemy.y = topGap + (totalWidthForEnemy * l);
            game.enemy.list.push(newEnemy);
        }
    }
}

function renderEnemies () {
    var htm = '';
    for (var i=0; i<game.enemy.list.length; i++) {
        htm += '<img class="enemy" src="img/enemy1.png" style="left:' + game.enemy.list[i].x + 'px; top: ' + game.enemy.list[i].y + 'px;" />';
    }
    game.enemy.Container.innerHTML = htm;
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

