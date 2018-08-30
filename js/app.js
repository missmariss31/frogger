// Enemies our player must avoid
const Enemy = function(location,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //set canvas location from Array
    this.x = location[0];
    this.y = location[1];
    //set speed
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. Also handle collision with Player?
    if (this.x > 500) {
        this.x -= 500
    }
    else {
        this.x += this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function (sprite,location) {
    //set canvas location
    this.x = location[0];
    this.y = location[1];
    //set image location
    this.sprite = sprite;
};

Player.prototype.update = function() {
    //handle collision with enemy;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//move player based on direction on 'keyup'
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'left':
            this.x -= 75;
            break;
        case 'up':
            this.y -= 75;
            break;
        case 'right':
            this.x += 75;
            break;
        case 'down':
            this.y += 75;
            break;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const bugOne = new Enemy([50,60],50);
const bugTwo = new Enemy([75,145],200);
const bugThree = new Enemy([250,230],250);
const bugFour = new Enemy([475,230],60);
const bugFive = new Enemy([20,60],150);
const bugSix = new Enemy([200,145],175);

const allEnemies = [bugOne, bugTwo, bugThree, bugFour, bugFive, bugSix];

let player = new Player('images/char-cat-girl.png',[200,350]);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
