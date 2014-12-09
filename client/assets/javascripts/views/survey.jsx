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
    console.log(this.answers());
  },

  answers: function () {
    return this.props.survey.questions.reduce(function (answers, question, i) {
      answers[question.title] = this.refs["question" + i].answer();
      return answers;
    }.bind(this), {});
  },

  render: function () {
    this.questionInstances = this.props.survey.questions.map(function (question, i) {
      return <Question question={question} ref={"question" + i} key={i} />;
    });

    return (
      <div>
        <h1>{this.props.survey.title}</h1>
        <p>{this.props.survey.description}</p>
        {this.questionInstances}
        <button className="button red large" onClick={this.showAnswers}>
          Send svar
        </button>
      </div>
    );
  }
});
