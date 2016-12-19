import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './base.css';
import App from './App';
import store from './store/setup';

import adminRoutes from 'admin/routes';

const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {adminRoutes}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
