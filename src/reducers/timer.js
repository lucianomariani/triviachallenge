import {DECREMENT_TIMER, RESET_TIMER } from '../actions/types';
import { Config } from '../data/config.js';
const InitialState = {
  seconds: Config.timer,
}
export default function triviaReducer(state = InitialState, action) {
  switch (action.type) {
    case DECREMENT_TIMER:
      let newstate =  {...state};
      newstate.seconds = newstate.seconds - 1 ;
      return newstate;
    case RESET_TIMER:
        let newstate2 =  {...state};
        newstate2.seconds = InitialState.seconds;
        return newstate2;
    default:
      return state;
  }
}