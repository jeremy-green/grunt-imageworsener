'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    imageworsener: {
      options: {
        args: ['-h', '90', '-bkgd', '88f,0f0', '-cc', '2', '-dither', 'f']
      },
      dist: {
        files: {
          'img/dist': ['img/*.{png,jpg,gif}']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register default task
  grunt.registerTask('default', ['imageworsener']);
};
