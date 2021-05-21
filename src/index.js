import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
// compose - 結合多個store enhancer 為一個, 因為createStore只接受一個store enhancer
// applyMiddleware - to be able to use middleware
import {createStore, compose, applyMiddleware} from 'redux';

// reduxFirestore - 需要config, 才知要連接到哪一個firestore/firebase
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';

// ReactReduxFirebaseProvider - Provider for context containing extended firebase instance created by react-redux-firebase.
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';

//Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'; 

// thunk - a middleware that allows us to make asynchronous actions in Redux 
// (can pause origin dispatch action, insert async function and recover the old action)
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';
import rootReducer from './components/reducer/rootReducer';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users', //設置collection name
  useFirestoreForProfile: true //將資料儲存在firestore的設定(Firestore for Profile instead of Realtime DB)
}

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig)
    )
  );

const rrfProps = {
  firebase, //Firebase library
  config: rrfConfig,
  dispatch: store.dispatch, //Redux's dispatch function
  createFirestoreInstance //Function for creating extended firestore instance
}

ReactDOM.render(
  <Provider store={store}>
    {/* 將rrfProps透過以上下文方式傳遞給其他組件使用  ex:authAction */}
    <ReactReduxFirebaseProvider {...rrfProps}> 
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
