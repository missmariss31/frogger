// Enemies our player must avoid
const Enemy = function(location) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //set canvas location from Array
    this.x = location[0];
    this.y = location[1];
    //set speed
    this.speed = 20;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. Also, handle collision with Player.
    this.speed = this.speed + dt;
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
            this.x -= 25;
            break;
        case 'up':
            this.y -= 25;
            break;
        case 'right':
            this.x += 25;
            break;
        case 'down':
            this.y += 25;
            break;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const bugOne = new Enemy([50,100]);
const bugTwo = new Enemy([150,200]);
const bugThree = new Enemy([250,100]);
const bugFour = new Enemy([350,200]);
const bugFive = new Enemy([400,100]);

const allEnemies = [bugOne, bugTwo, bugThree, bugFour, bugFive];

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
