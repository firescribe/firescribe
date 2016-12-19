import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Toolbar from 'admin/routes/dashboard/partials/Toolbar';

export default (
  <Route path="dashboard" component={Toolbar}>
    <IndexRoute />
    <Route path="analytics" />
  </Route>
);
