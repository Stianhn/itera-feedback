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

var Survey = React.createClass({
  showAnswers: function () {
    console.log(this.state.answers);
  },

  getInitialState: function () {
    return {
      answers: {}
    };
  },

  handleAnswerUpdate: function (title, value) {
    var answer = {};
    answer[title] = value;

    var updatedAnswers = React.addons.update(
      this.state.answers, {$merge: answer});

    this.setState({answers: updatedAnswers});
  },

  render: function () {
    var title = this.props.title,
        description = this.props.description,
        questionInstances = this.props.questions.map(function (question, i) {
      return <Question {...question} value={this.state.answers[question.title]} onChange={this.handleAnswerUpdate.bind(this, question.title)} />;
    }.bind(this));

    return (
      <div className="survey">
        <h1>{title}</h1>
        <p>{description}</p>
        {questionInstances}
        <button className="button red large" onClick={this.showAnswers}>
          Send svar
        </button>
      </div>
    );
  }
});
