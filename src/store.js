import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemReducer } from './reducers/itemReducer'

const initialState = {};

const store = createStore(
  itemReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger
    )
  )
);

export default store;