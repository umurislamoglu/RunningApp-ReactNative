import {createStore, applyMiddleware, combineReducers} from 'redux';
import userAuthReducer from './reducers/userAuthReducer';
import userDataReducer from './reducers/userDataReducer';
import allUsersReducer from './reducers/allUsersReducer';
import thunk from 'redux-thunk';

export default function ConfigureStore() {
  const store = createStore(
    combineReducers({
      userAuth: userAuthReducer,
      allUsers: allUsersReducer,
      userData: userDataReducer,
    }),
    applyMiddleware(thunk),
  );

  return store;
}


