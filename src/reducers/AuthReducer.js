import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };//*1
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

/*
1 - make a new object, copie everything from STATE object and change the
    email with the paload. This is because, if we return something like

    state.email = action.payload
    return state

    we are simply changing the state from a new pointer STATE, so the state
    object will change for both pointers, so nothing is new and redux
    thinks that is no need to reload any component, no changed was made
*/
