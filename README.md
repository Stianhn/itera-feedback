Itera Feedback
=============

## Installation

It is assumed that the developer already has `npm`, `grunt-cli`, `python` and
`virtualenv` installed on their system. If not, see below.

```
$ npm install
$ grunt install
```

### Linux

Most Linux distributions should have `npm`, `python` and `virtualenv` available
from their repositories. `grunt-cli` can be installed with npm (or from AUR if
on Arch).

```
$ npm install grunt-cli
```

### Mac

Mac has `python 2.x` installed by default but does not provide `virtualenv`.
You can install `python` with homebrew which will give you the latest `python
2.x` and `pip`. You can then install `virtualenv` with `pip`. Homebrew also
provides a python3 package which can install python3 and pip3 binaries if
required.

`npm` can be installed by installing `node` with homebrew. `grunt-cli` can be
installed with npm.

```
$ brew install python node
$ pip install virtualenv
$ npm install grunt-cli
```

## Running

The server will serve both the frontend client and the backend api. By default,
it will serve on port 5000.

```
$ grunt run
```

View it by visiting http://localhost:5000/.

### Livereload

If you want, you may use livereload. This is a feature which automatically
reloads the web page in your browser when a file has changed. Note that it only
works when viewing the client, not the api, because it injects a javascript,
which means that it will only work on pages that contain a head tag.

It can be installed with grunt.

```
$ grunt shell:livereload
```

After this, run the server as normally and it will be used.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Copyright (C) 2014 Jonas Amundsen, Trygve Aaberge

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
