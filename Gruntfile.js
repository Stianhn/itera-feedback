/* global module */

module.exports = function(grunt) {
  "use strict";

  var path = require('path');

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: "./client/vendor",
          cleanBowerDir: true,
          layout: function (type) {
            return type;
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bower-task");
}
