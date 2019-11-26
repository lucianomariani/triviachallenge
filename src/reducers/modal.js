import {MODAL_SHOW, MODAL_HIDE} from '../actions/types';
const InitialState = {
  show: false,
}
export default function modalReducer(state = InitialState, action) {
  switch (action.type) {
    case MODAL_SHOW:
      let newstate =  {...state};
      newstate.show = true
      return newstate;
    case MODAL_HIDE:
      let newstate2 =  {...state};
      newstate2.show = false
      return newstate2;
    default:
      return state;
  }
}