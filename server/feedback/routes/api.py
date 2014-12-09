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

from flask import request

from feedback import app, db


@app.route("/api/answer/<id>", methods=["GET"])
def get_answer(id):
    return str(db.get_answer(id))


@app.route("/api/form/<id>", methods=["GET"])
def get_form(id):
    return str(db.get_form(id))


@app.route("/api/answer", methods=["POST"])
def post_answer():
    db.post_answer(request.get_json())
    return ""


@app.route("/api/form", methods=["POST"])
def post_form():
    db.post_form(request.get_json())
    return ""
