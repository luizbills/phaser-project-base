define(function(require) {
  'use strict';

  var parent = Phaser.Sprite;

  // class constructor
  function Logo(game, x, y) {
    parent.call(this, game, x, y, 'logo'); // super
    game.world.add(this);
  }

  // inherits from parent class
  Logo.prototype = Object.create(parent.prototype);
  Logo.prototype.constructor = Logo;

  // class methods
  Logo.prototype.update = function() {
    // update method
  };

  // exports
  return Logo;
});
