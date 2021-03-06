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

var Dropdown = React.createClass({
  getDefaultProps: function () {
    return {
      onChange: function () {},
      alternatives: [],
      includeBlank: true
    };
  },

  handleChange: function (event) {
    this.props.onChange(event.target.value);
  },

  render: function () {
    var name = this.props.name,
        title = this.props.title,
        description = this.props.description,
        alternatives = this.props.alternatives,
        defaultValue = this.props.defaultValue,
        includeBlank = this.props.includeBlank;

    if (title && !name) {
      name = titleToName(title);
    }

    return (
      <div>
        <If condition={description}>
          <p>{description}</p>
        </If>
        <p className="question dropdown">
          <label htmlFor={name}>{title}</label>
          <select name={name} id={name} defaultValue={defaultValue} onChange={this.handleChange}>
            <If condition={includeBlank}>
              <option />
            </If>
            {this.props.alternatives.map(function (alternative, i) {
              return <option key={i}>{alternative}</option>
            })}
          </select>
        </p>
      </div>
    );
  }
});
