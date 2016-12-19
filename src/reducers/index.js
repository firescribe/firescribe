import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import window from './window';
import config from './config';

export default combineReducers({
  routing: routerReducer,
  config,
  window,
});
