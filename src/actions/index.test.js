import * as actions from './index.js'
import {  FETCH_TRIVIA_LOADING } from './types'

describe('actions', () => {
  it('should loading', () => {
    const expectedAction = {
      type: FETCH_TRIVIA_LOADING
    }
    expect(actions.fetchTriviaLoading()).toEqual(expectedAction)
  })
})