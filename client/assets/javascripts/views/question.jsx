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

var questionType = function (question) {
  switch (question.type) {
    case 'dropdown':
      return Dropdown;
      break;
    case 'text-large':
      return TextLarge;
      break;
    case 'text-small':
      return TextSmall;
      break;
  }
}

var Question = React.createClass({
  answer: function () {
    return this.refs.question.answer();
  },

  render: function () {
    var name = titleToName(this.props.question.title),
        Type = questionType(this.props.question);

    return <Type {...this.props} name={name} ref="question" />
  }
});
