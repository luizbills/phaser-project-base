module.exports = function(grunt) {
  var handlebars = require('handlebars');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sprite: {
        files: 'src/sprite/*.js',
        options: {
          event: ['added']
        }
      }
    }
  });

  // load all grunt plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // initialize handlebars helpers
  require('./_grunt/handlebars/helpers')(handlebars);

  // watch event
  grunt.event.on('watch', function(action, filepath, target) {
    // target = 'sprite' || 'state' || etc...
    var filename = filepath.split('\\').pop();
    // dont continue if is a folder (watch triggers when a folder is created)
    if (filename.indexOf('.') === -1) {
      return;
    } else {
      filename = filename.substr(0, filename.indexOf('.'));
    }

    var fs = require('fs');
    var source = fs.readFileSync(__dirname + '\\_grunt\\handlebars\\templates\\' + target + '.hbs', 'utf8');
    var template = handlebars.compile(source)
    var result = template({
      name: filename
    });
    fs.writeFile(filepath, result, 'utf8');
  });

  // default task
  grunt.registerTask('default', ['watch']);
};
