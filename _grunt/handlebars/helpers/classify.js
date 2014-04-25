var _s = require('underscore.string');

module.exports = function(str) {
  return _s.classify(str || '');
};
