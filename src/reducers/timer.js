import {DECREMENT_TIMER } from '../actions/types';
import { Config } from 'data/config.js';
const InitialState = {
  seconds: Config.timer,
}
export default function triviaReducer(state = InitialState, action) {
  switch (action.type) {
    case DECREMENT_TIMER:
      let newstate =  {...state};
      newstate.seconds = newstate.seconds - 1 ;
      newstate.results = action.payload
      return newstate;
    default:
      return state;
  }
}