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

var DropdownForm = React.createClass({
  getDefaultProps: function () {
    return {
      onChange: function () {},
      alternatives: []
    };
  },

  handleTitleChange: function (title) {
    this.props.onChange({title: title});
  },

  handleDescriptionChange: function (description) {
    this.props.onChange({description: description});
  },

  handleAlternativeChange: function (i, alternative) {
    var updatedAlternatives = React.addons.update(
      this.props.alternatives, {$splice: [[i, 1, alternative]]});

    this.props.onChange({alternatives: updatedAlternatives});
  },

  addAlternative: function () {
    this.props.onChange({alternatives: this.props.alternatives.concat([""])});
  },

  deleteAlternative: function (i) {
    if (confirm("Er du sikker på at du vil fjerne dette alternativet?")) {
      var updatedAlternatives = React.addons.update(
        this.props.alternatives, {$splice: [[i, 1]]});

      this.props.onChange({alternatives: updatedAlternatives});
    }
  },

  render: function () {
    var title = this.props.title,
        description = this.props.description,
        alternatives = this.props.alternatives;

    return (
      <div>
        <TextSmall title="Ditt spørsmål" defaultValue={title} onChange={this.handleTitleChange} />
        <TextSmall title="Beskrivelse" defaultValue={description} onChange={this.handleDescriptionChange} />
        {alternatives.map(function (alternative, i) {
          return (
            <div>
              <TextSmall title={"Alternativ " + (i + 1)} defaultValue={alternative} onChange={this.handleAlternativeChange.bind(this, i)} />
              <p>
                <button className="button small" onClick={this.deleteAlternative.bind(this, i)}>
                  Fjern alternativ
                </button>
              </p>
            </div>
          );
        }.bind(this))}
        <p>
          <button className="button blue" onClick={this.addAlternative}>
            Legg til alternativ
          </button>
        </p>
      </div>
    );
  }
});
