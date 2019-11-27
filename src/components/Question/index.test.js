import React from 'react';
import { shallow } from 'enzyme';
import Question from './index.js';
import {Button,  Jumbotron, Row, Col,Container, ProgressBar} from 'react-bootstrap';
import he from 'he'

const trivia = {"response_code":0,"results":
[{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The movie &quot;The Nightmare before Christmas&quot; was all done with physical objects.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The word &quot;Inception&quot; came from the 2010 blockbuster hit &quot;Inception&quot;.","correct_answer":"False","incorrect_answers":["True"]},
{"category":"Science: Computers","type":"boolean","difficulty":"medium","question":"To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ","correct_answer":"True","incorrect_answers":["False"]},
{"category":"Entertainment: Video Games","type":"boolean","difficulty":"medium","question":"In &quot;Overwatch,&quot; an allied McCree will say &quot;Step right up&quot; upon using his ultimate ability Deadeye.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"Scientists accidentally killed the once known world&#039;s oldest living creature, a mollusc, known to be aged as 507 years old.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"Science & Nature","type":"boolean","difficulty":"easy","question":"An exothermic reaction is a chemical reaction that releases energy by radiating electricity.","correct_answer":"False","incorrect_answers":["True"]},
{"category":"Entertainment: Video Games","type":"boolean","difficulty":"easy","question":"In &quot;Undertale&quot;, the main character of the game is Sans.","correct_answer":"False","incorrect_answers":["True"]},
{"category":"Entertainment: Music","type":"boolean","difficulty":"easy","question":"Michael Jackson wrote The Simpsons song &quot;Do the Bartman&quot;.","correct_answer":"False","incorrect_answers":["True"]},
{"category":"Entertainment: Video Games","type":"boolean","difficulty":"easy","question":"&quot;Sonic the Hedgehog 2&quot; originally was going to have a time travel system.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"Entertainment: Video Games","type":"boolean","difficulty":"medium","question":"The scrapped Sonic the Hedgehog 2 level &quot;Hidden Palace Zone&quot; was later reused in the iOS port of the game. ","correct_answer":"True","incorrect_answers":["False"]}]}

const questionNumber = 0;
const questionCategory = he.decode(trivia.results[questionNumber].category);
const questionText = he.decode(trivia.results[questionNumber].question);
const wrapper = shallow(<Question questionNumber={questionNumber} 
  result={trivia.results[questionNumber]}
  questionsTotal={trivia.results.length} />);

describe('Question ', () => {
  it('renders question category', () => {
      expect(wrapper.find('h3.category').text()).not.toBe('');
      expect(wrapper.find('h3.category').text()).toBe(he.decode(questionCategory));
  });
  it('renders question text', () => {
    expect(wrapper.find('h2').text()).not.toBe('');
    expect(wrapper.find('h2').text()).toBe(he.decode(questionText));
  });
  it('renders ProgressBar', () => {
    expect(wrapper.find(ProgressBar));
    expect(wrapper.find('h3.category').text()).toBe(he.decode(questionCategory));
  });
  it('renders Answers', () => {
    const answersAmout = trivia.results[questionNumber].incorrect_answers.length + 1
    expect(wrapper.find(Button)).toHaveLength(answersAmout);
  });
});


