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

var QuestionEditor = React.createClass({
  getInitialState: function () {
    return {
      onChange: function () {},
      selectedTab: 0
    };
  },

  setSelectedTab: function (i) {
    this.setState({selectedTab: i});
  },

  handleQuestionChange: function (question) {
    this.props.onChange(question)
  },

  handleTypeChange: function (type) {
    this.props.onChange({type: type});
  },

  render: function () {
    var ViewType = inputType(this.props.type),
        FormType = inputFormType(this.props.type);

    return (
      <div className="question-form-wrapper">
        <ul>
          <li className={this.state.selectedTab == 0 ? "selected" : ""} onClick={this.setSelectedTab.bind(this, 0)}>Rediger</li>
          <li className={this.state.selectedTab == 1 ? "selected" : ""} onClick={this.setSelectedTab.bind(this, 1)}>Forhåndsvis</li>
          <li onClick={this.props.onDelete}>Slett</li>
        </ul>
        <If condition={this.state.selectedTab == 0}>
          <Dropdown title="Spørsmålstype" includeBlank={false} alternatives={["text-small", "text-large", "dropdown"]} defaultValue={this.props.type} onChange={this.handleTypeChange} />
          <FormType {...this.props} onChange={this.handleQuestionChange} />
        </If>
        <If condition={this.state.selectedTab == 1}>
          <ViewType {...this.props} onChange={undefined} />
        </If>
      </div>
    );
  }
});
