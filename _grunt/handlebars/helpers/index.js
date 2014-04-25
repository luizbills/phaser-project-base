var helpers = {
  classify: require('./classify'),
  camelize: require('./camelize'),
  uppercase: require('./uppercase'),
  lowercase: require('./lowercase')
};

module.exports = function(Handlebars) {
  for (var name in helpers) {
    Handlebars.registerHelper(name, helpers[name]);
  }
};
