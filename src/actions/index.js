import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
      type: PASSWORD_CHANGED,
      payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: user
        });
      }); //*1
  };
};

/*
1- After redux-thunk calls the function with dispatch, the login request inspect
   is fired, then we wait until the login complete, and then the ".then" is fired
   After this, we dispatch our action
*/
