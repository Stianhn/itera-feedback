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

var SurveyForm = React.createClass({
  showSurvey: function () {
    console.log(this.survey());
  },

  survey: function () {
    return {
      title: this.state.title,
      description: this.state.description,
      questions: this.state.questions
    };
  },

  getInitialState: function () {
    return {
      title: this.props.title,
      description: this.props.description,
      questions: this.props.questions
    };
  },

  updateTitle: function (event) {
    this.setState({title: event.target.value});
  },

  updateDescription: function (event) {
    this.setState({description: event.target.value});
  },

  updateQuestion: function (i, question) {
    var updatedQuestion = React.addons.update(
      this.state.questions[i], {$merge: question});

    var updatedQuestions = React.addons.update(
      this.state.questions, {$splice: [[i, 1, updatedQuestion]]});

    this.setState({questions: updatedQuestions});
  },

  deleteQuestion: function (i) {
    if (confirm("Er du sikker på at du vil slette dette spørsmålet?")) {
      var updatedQuestions = React.addons.update(
        this.state.questions, {$splice: [[i, 1]]});

      this.setState({questions: updatedQuestions});
    }
  },

  addQuestion: function () {
    this.setState({questions: this.state.questions.concat([{type: "text-small"}])});
  },

  render: function () {
    var questionFormInstances = this.state.questions.map(function (question, i) {
      return <QuestionEditor {...question} ref={"question" + i} key={i} onChange={this.updateQuestion.bind(this, i)} onDelete={this.deleteQuestion.bind(this, i)} />;
    }.bind(this));

    return (
      <div className="survey-form">
        <h1 className="title">
          <input type="text" ref="title" placeholder="Tittel" value={this.state.title} onChange={this.updateTitle} />
        </h1>
        <p>
          <textarea className="description" ref="description" placeholder="Beskrivelse" value={this.state.description} onChange={this.updateDescription} />
        </p>
        {questionFormInstances}
        <p>
          <button className="button blue large" onClick={this.addQuestion}>
            Legg til spørsmål
          </button>
          <button className="button red large" onClick={this.showSurvey}>
            Lagre skjema
          </button>
        </p>
      </div>
    );
  }
});
