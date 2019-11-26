
import {FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_LOADING, FETCH_TRIVIA_ERROR ,SET_SCORES,RESET_SCORES } from '../actions/types';
import shuffle from 'shuffle-array';

const InitialState = {
  results: [],
  error: false,
  loading: false,
  userChoices: [],
  score: 0,
  questionNumber: 0
}

export default function triviaReducer(state = InitialState, action) {
  switch (action.type) {
    case FETCH_TRIVIA_SUCCESS:
      let newstate =  {...state};
      newstate.error = false;
      newstate.loading = false;
      newstate.results = action.payload
      newstate.results = newstate.results.map( (trivia_item) => {
        trivia_item.answers = shuffle(trivia_item.incorrect_answers.concat(trivia_item.correct_answer));
        return trivia_item
      });
      return newstate;
    case FETCH_TRIVIA_LOADING:
      let newstate2 =  {...state};
      newstate2.loading = true;
      return newstate2;
    case FETCH_TRIVIA_ERROR:
      let newstate3 =  {...state};
      newstate3.loading = false;
      newstate3.error = true;
      return newstate3;
    case SET_SCORES:
      let newstate4 =  {...state};
      newstate4.userChoices = [...state.userChoices, action.payload.choice]
      newstate4.score = action.payload.score
      newstate4.questionNumber = newstate4.questionNumber + 1
      return newstate4;
    case RESET_SCORES:
      let newstate5 =  {...state};
      newstate5.results = [];
      newstate5.userChoices =  [];
      newstate5.score =  0;
      newstate5.questionNumber =  0
      return newstate5;
    default:
      return state;
  }
}