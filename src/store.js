import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemReducer } from './reducers/itemReducer'

const middleware = [thunk, logger];

export default createStore(
  itemReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);