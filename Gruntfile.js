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

/* global module */

module.exports = function(grunt) {
  "use strict";

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
    },
    eslint: {
      target: [
        "Gruntfile.js",
        "client/assets/javascripts"
      ]
    },
    flake8: {
      src: [
        "server/run.py",
        "server/feedback",
        "server/tests"
      ]
    },
    shell: {
      run: {
        command: "./venv/bin/python run.py dev",
        options: {
          execOptions: {
            cwd: "server"
          }
        }
      },
      venv: {
        command: "virtualenv venv && ./venv/bin/pip install -r requirements.txt",
        options: {
          execOptions: {
            cwd: "server"
          }
        }
      },
      livereload: {
        command: "./venv/bin/pip install livereload",
        options: {
          execOptions: {
            cwd: "server"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-flake8");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("install", ["bower:install", "shell:venv"]);
  grunt.registerTask("run", ["shell:run"]);
};
