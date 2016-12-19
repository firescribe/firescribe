import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from 'reducers';

const logger = reduxLogger({
  predicate: () => process.env.NODE_ENV === 'development',
  collapsed: true,
  duration: true,
});

const middlewares = [];

middlewares.push(applyMiddleware(...[thunk, logger]));

export default createStore(reducers, {}, compose(...middlewares));
