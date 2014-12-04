/* global module */

/*
 * Copyright (C) 2014 Jonas Amundsen, Trygve Aaberge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
