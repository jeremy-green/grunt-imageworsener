/*
 * grunt-imageworsener
 * https://github.com/jeremy-green/grunt-imageworsener
 *
 * Copyright (c) 2013 Jeremy Green
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;

  grunt.registerMultiTask('imageworsener', 'ImageWorsener task runner for grunt.', function () {
    var done = this.async();
    var options = this.options({
      //output: '-dump'
    });
    var args = options.args || [];

    args.push(options.output, options.url);

    // Iterate over all src-dest file pairs.
    this.files.forEach(function(f) {
      var src = f.orig.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        return true;
      });
      console.log(src);
    });

    /*grunt.util.spawn({
      cmd: 'imagew',
      args: args
    }, function (error, result, code) {
      grunt.log.writeln();
      grunt.file.write();
      done(error);
    });*/

  });
};
