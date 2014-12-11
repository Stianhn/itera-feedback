#!/usr/bin/env python

# Copyright (C) 2014 Trygve Aaberge, Jonas Amundsen
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import sys

from feedback import app


if len(sys.argv) > 1 and sys.argv[1] == "dev":
    try:
        from livereload import Server
        server = Server(app.wsgi_app)
        server.watch('../client')
        server.serve(port=5000, restart_delay=None)
    except ImportError:
        app.run(debug=True)

else:
    app.run()