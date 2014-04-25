define(function(require) {
  'use strict';
  var config = require('config');

  var game = new Phaser.Game(config);
  game.state.add('Boot', require('state/boot'));
});
