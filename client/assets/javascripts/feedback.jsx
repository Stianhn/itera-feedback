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

var survey = {
  title: "Itera Spørreundersøkelse 2015",
  description: "Dette er årets Itera spørreundersøkelse som går ut til alle våre kunder.",
  questions: [{
    title: "Hvem er du?",
    type: "text-small"
  }, {
    title: "Hvem er din sjef?",
    type: "dropdown",
    alternatives: [
      "Tommy Ryen",
      "Karl-August Brunstad"
    ]
  }, {
    title: "Hva synes du?",
    description: "Dette er det viktigste spørsmålet.",
    type: "text-large",
    placeholder: "Her kan du skrive om litt av hvert."
  }]
};

React.render(
  <SurveyForm {...survey} />,
  document.getElementById("content-wrapper")
);
