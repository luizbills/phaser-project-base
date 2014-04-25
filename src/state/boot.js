define(function(require) {

  var Logo = require('sprite/logo');

  function BootState() {}

  BootState.prototype = {

    preload: function() {
      this.load.image('logo', 'assets/phaser-logo.png');
    },

    create: function() {
      var sprite = new Logo(this.game, 0, 0);
    }

  };

  return BootState;

});
