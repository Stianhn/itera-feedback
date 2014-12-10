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

var TextForm = React.createClass({
  getDefaultProps: function () {
    return {
      onChange: function () {}
    };
  },

  handleTitleChange: function (title) {
    this.props.onChange({title: title});
  },

  handlePlaceholderChange: function (placeholder) {
    this.props.onChange({placeholder: placeholder});
  },

  handleDescriptionChange: function (description) {
    this.props.onChange({description: description});
  },

  render: function () {
    var title = this.props.title,
        placeholder = this.props.placeholder,
        description = this.props.description;

    return (
      <div>
        <TextSmall title="Ditt spørsmål" defaultValue={title} onChange={this.handleTitleChange} />
        <TextSmall title="Placeholdertekst" defaultValue={placeholder} onChange={this.handlePlaceholderChange} />
        <TextSmall title="Beskrivelse" defaultValue={description} onChange={this.handleDescriptionChange} />
      </div>
    );
  }
});
