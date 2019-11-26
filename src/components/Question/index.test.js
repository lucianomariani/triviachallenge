import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import Question from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Question />);
  const welcome = <p>Hola</p>;
  // expect(wrapper.conntains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});