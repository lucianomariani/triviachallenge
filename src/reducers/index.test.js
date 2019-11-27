import reducer from './index.js'
import modal_reducer from './modal.js'
import timer_reducer from './timer.js'
import * as types  from '../actions/types';
import { Config } from '../data/config.js';

const initialState = {
  "modal":  {
   "show": false,
   },
   "timer":  {
    "seconds": Config.timer,
    },
    "trivia":  {
         "error": false,
         "loading": false,
         "questionNumber": 0,
         "results":  [],
         "score": 0,
         "userChoices":  [],
 }}
describe(' reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle MODAL_SHOW', () => {
    expect(
      modal_reducer([], {
        type: types.MODAL_SHOW,
        show: true
      })
    ).toEqual(
      {
        show: true,
      }
    )
    expect(
      modal_reducer([], {
        type: types.MODAL_HIDE,
        show: false
      })
    ).toEqual(
      {
        show: false,
      }
    )
  })
  it('should handle RESET_TIMER', () => {
    expect(
      timer_reducer([], {
        type: types.RESET_TIMER
      })
    ).toEqual(
      {
        seconds: Config.timer,
      }
    )
  })


})