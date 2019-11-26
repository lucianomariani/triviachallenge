
import {FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_LOADING, FETCH_TRIVIA_ERROR } from '../actions/types';
const InitialState = {
  results: '',
  error: false,
  loading: false
}
export default function weatherReducer(state = InitialState, action) {
  switch (action.type) {
    case FETCH_TRIVIA_SUCCESS:
      let newstate =  {...state};
      newstate.error = false;
      newstate.loading = false;
      newstate.results = action.payload
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
    default:
      return state;
  }
}