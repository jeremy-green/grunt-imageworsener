/*
 * grunt-imageworsener
 * https://github.com/jeremy-green/grunt-imageworsener
 *
 * Copyright (c) 2013 Jeremy Green
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {
  var path = require('path');
  var os = require('os');
  var numCPUs = os.cpus().length;

  var _ = grunt.util._;

  grunt.registerMultiTask('imageworsener', 'ImageWorsener task runner for grunt.', function () {

    if (!this.files[0]) {
      grunt.fail.fatal('No src or invalid src provided.');
      return;
    }

    var done = this.async();
    var options = this.options({
      //default options
    });

    this.files.forEach(function(file) {

      file.src.forEach(function(f) {

        var src = f;
        var args = options.args || [];

        var dest = path.join(file.dest, path.basename(src));
        console.log('DEST', dest);

        if (!grunt.file.exists(path.dirname(dest))) {
           grunt.file.mkdir(path.dirname(dest));
        }

        args.push(src, dest);

        //console.log('ARGS:', args);

        grunt.util.spawn({
          cmd: 'imagew',
          args: args
        }, function (error, result, code) {
          var srcIndex = args.indexOf(src);
          console.log(srcIndex, args);
          if (srcIndex > -1) {
            args = args.splice(srcIndex, 1);
          }
          console.log(args);
          var destIndex = args.indexOf(dest);
          if (destIndex > -1) {
            args = args.splice(destIndex, 1);
          }
          grunt.log.writeln('Saving image to ' + dest);
          done(error);
        });




      });
    });

    /*grunt.util.async.forEachLimit(this.files, numCPUs, function (file, next) {

      var args = options.args || [];

      var src = file.src[0];
      var dest = path.join(file.dest, path.basename(src));

      args.push(src, dest);

      if (!grunt.file.exists(path.dirname(dest))) {
         grunt.file.mkdir(path.dirname(dest));
      }

      grunt.util.spawn({
        cmd: 'imagew',
        args: args
      }, function (error, result, code) {
        grunt.log.writeln('Saving image to ' + dest);
        done(error);
      });

      //next();
    });*/
  });
};
