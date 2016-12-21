import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout, { CenterLayout, FullwidthLayout } from 'admin/components/Layouts';
import Toolbar from 'admin/routes/dashboard/partials/Toolbar';
import Overview from 'admin/routes/dashboard/views/Overview';

export default (
  <Route path="dashboard" components={{ layout: Layout, toolbar: Toolbar }}>
    <Route component={CenterLayout}>
      <IndexRoute component={Overview}/>
      <Route path="analytics" component={Overview} />
    </Route>
    <Route component={FullwidthLayout}>
      <Route path="debug" component={Overview} />
    </Route>
  </Route>
);
