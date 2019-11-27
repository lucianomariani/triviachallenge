import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Home from './containers/Home';
import Game from "./containers/Game";
import Results from "./containers/Results";

const wrapper = shallow(<App />) 

it('renders without crashing', () => {
  expect(wrapper.find(App))
});
