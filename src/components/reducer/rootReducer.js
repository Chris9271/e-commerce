import authReducer from './authReducer';
import cartReducer from './cartReducer';
import {combineReducers} from 'redux'; //combine reducers into one reducer
import {firestoreReducer} from 'redux-firestore'; //同步data
import {firebaseReducer} from 'react-redux-firebase';

// Add Firebase to reducers
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;
