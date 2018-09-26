
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE });
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.employeeList();
      })
      .catch(err => {
        console.log('ERROR', err);
      }); //1
      //dispatch({ type: EMPLOYEE_CREATE });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }); //2
      });
  };
};

/*
1- path to json datastruct (those are keys)'user/userdId/employees'
   same of user/123/employees
2-firebase automatically knows that new data was created and then dispatch an action
*/
