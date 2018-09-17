import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAAAyM2V4tBZTcwahpo2cay0Zl_zKiFuY8',
      authDomain: 'manager-7b6c8.firebaseapp.com',
      databaseURL: 'https://manager-7b6c8.firebaseio.com',
      projectId: 'manager-7b6c8',
      storageBucket: 'manager-7b6c8.appspot.com',
      messagingSenderId: '34196578793'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
