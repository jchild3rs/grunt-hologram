/*
 * grunt-hologram
 *
 *
 * Copyright (c) 2014 James Childers
 * Licensed under the MIT license.
 */

'use strict';
var which = require('which');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('hologram', 'Generate Hologram style guides with Grunt', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

  });

};
