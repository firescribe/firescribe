import React from 'react';
import { Route } from 'react-router';

import AdminContainer from 'admin/containers/AdminContainer';

// import SetupView from 'admin/views/Setup';
import dashboard from 'admin/routes/dashboard/routes';

export default (
  <Route>
    {/*<Route path="setup" component={SetupView} />*/}
    <Route path="admin" component={AdminContainer}>
      {dashboard}
    </Route>
  </Route>
);
