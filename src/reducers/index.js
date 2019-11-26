import { combineReducers } from 'redux';
import trivia from './trivia';
import timer from './timer';
import modal from "./modal";

export default combineReducers({
    trivia: trivia,
    timer : timer,
    modal : modal
});