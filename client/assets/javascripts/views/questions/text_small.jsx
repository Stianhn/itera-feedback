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

var TextSmall = React.createClass({
  answer: function (event) {
    return this.refs.answer.getDOMNode().value.trim();
  },

  render: function () {
    var name = this.props.name;

    return (
      <UntitledQuestion {...this.props}>
        <div className="question text-small">
          <label htmlFor={name}>{this.props.title}</label>
          <input name={name} id={name} type="text" placeholder={this.props.placeholder} ref="answer" />
        </div>
      </UntitledQuestion>
    );
  }
});