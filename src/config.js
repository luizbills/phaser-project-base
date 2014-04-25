// requirejs configuration
requirejs.config({
  'baseUrl': 'src'
});

// game configuration
define('config', {
  width: 320,
  height: 320,
  renderer: Phaser.AUTO,
  parent: 'phaser-game', // game container id
  state: 'Boot', // first/main state
  //antialias: true,
  //transparent: true,
  //seed: 1234567890, // seed for random numbers
  physicsConfig: {
    //arcade: true,
    //ninja: true,
    //p2: true
  }
});

// start game
require(['main']);
