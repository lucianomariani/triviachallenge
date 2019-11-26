import { FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_ERROR, FETCH_TRIVIA_LOADING} from './types'
import { Config } from 'data/config.js';


const API_URL = process.env.REACT_APP_WEATHER_API_URL;


export const fetchTrivia = () => {
const URL = API_URL + `?amount=${Config.amount}&type=${Config.type}&encode=${Config.encode}&category=${Config.category}&difficulty=${Config.difficulty}`;

  return(dispatch) => {
    dispatch(fetchTriviaLoading());
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
