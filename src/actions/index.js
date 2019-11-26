import { FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_ERROR, FETCH_TRIVIA_LOADING, SET_SCORES, DECREMENT_TIMER, RESET_TIMER, MODAL_SHOW, MODAL_HIDE,RESET_SCORES} from './types'
import { Config } from 'data/config.js';

const API_URL = process.env.REACT_APP_TRIVIA_API_URL;

export const fetchTrivia = () => {
const URL = API_URL + `?amount=${Config.amount}&type=${Config.type}&encode=${Config.encode}&category=${Config.category}&difficulty=${Config.difficulty}`;

  return(dispatch) => {
    dispatch(fetchTriviaLoading());
    dispatch(resetScores());
    fetch(URL)
        .then(res => res.json())
        .then(data => {
          // If trivia exists, update trivia details
          if(data.response_code === 0) {
              dispatch(fetchTriviaSuccess(data.results))
          } else {
            // If trivia doesn't exist, throw error
            dispatch(fetchTriviaError(data))
            
          }
        })
        .catch(err => {
            dispatch(fetchTriviaError(err))
         
        });
  }

}
export const fetchTriviaSuccess =  (data) => {
  return {
    type: FETCH_TRIVIA_SUCCESS,
    payload: data 
  }
};

export const fetchTriviaError =  (error) => {
  return {
    type: FETCH_TRIVIA_ERROR,
    payload: error
  }
};

export const fetchTriviaLoading =  () => {
  return {
    type: FETCH_TRIVIA_LOADING
  }
};


export const setScores =  (data) => {
  return {
    type: SET_SCORES,
    payload: data 
  }
};
export const resetScores =  (data) => {
  return {
    type: RESET_SCORES,
    payload: data 
  }
};
export const decrementTimer =  (data) => {
  return {
    type: DECREMENT_TIMER,
    payload: data 
  }
};
export const resetTimer =  (data) => {
  return {
    type: RESET_TIMER,
    payload: data 
  }
};


export const modalShow =  (data) => {
  return {
    type: MODAL_SHOW,
    payload: data 
  }
};

export const modalHide =  (data) => {
  return {
    type: MODAL_HIDE,
    payload: data 
  }
};

