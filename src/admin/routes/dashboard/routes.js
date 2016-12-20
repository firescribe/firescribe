import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Toolbar from 'admin/routes/dashboard/partials/Toolbar';

import Overview from 'admin/routes/dashboard/views/Overview';

console.log(Overview)

export default (
  <Route path="dashboard" components={{ toolbar: Toolbar }}>
    <IndexRoute component={Overview} />
    <Route path="analytics" component={Overview} />
  </Route>
);
