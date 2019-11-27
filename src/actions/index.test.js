import * as actions from './index.js'
import * as types  from './types';

describe('actions', () => {
  it('should define FETCH_TRIVIA_LOADING', () => {
    const expectedAction = {
      type: types.FETCH_TRIVIA_LOADING
    }
    expect(actions.fetchTriviaLoading()).toEqual(expectedAction)
  })
  it('should define FETCH_TRIVIA_SUCCESS', () => {
    const expectedAction = {
      type: types.FETCH_TRIVIA_SUCCESS
    }
    expect(actions.fetchTriviaSuccess()).toEqual(expectedAction)
  })
  it('should define FETCH_TRIVIA_ERROR', () => {
    const expectedAction = {
      type: types.FETCH_TRIVIA_ERROR
    }
    expect(actions.fetchTriviaError()).toEqual(expectedAction)
  })
  
  it('should define SET_SCORES', () => {
    const expectedAction = {
      type: types.SET_SCORES
    }
    expect(actions.setScores()).toEqual(expectedAction)
  })
  it('should define RESET_SCORES', () => {
    const expectedAction = {
      type: types.RESET_SCORES
    }
    expect(actions.resetScores()).toEqual(expectedAction)
  })
  it('should define DECREMENT_TIMER', () => {
    const expectedAction = {
      type: types.DECREMENT_TIMER
    }
    expect(actions.decrementTimer()).toEqual(expectedAction)
  })
  it('should define RESET_TIMER', () => {
    const expectedAction = {
      type: types.RESET_TIMER
    }
    expect(actions.resetTimer()).toEqual(expectedAction)
  })
  it('should define MODAL_HIDE', () => {
    const expectedAction = {
      type: types.MODAL_HIDE
    }
    expect(actions.modalHide()).toEqual(expectedAction)
  })
  it('should define MODAL_SHOW', () => {
    const expectedAction = {
      type: types.MODAL_SHOW
    }
    expect(actions.modalShow()).toEqual(expectedAction)
  })
})

