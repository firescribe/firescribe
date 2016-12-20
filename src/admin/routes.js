import React from 'react';
import { Route } from 'react-router';

import AdminContainer from 'admin/containers/AdminContainer';

// import SetupView from 'admin/views/Setup';
import dashboard from 'admin/routes/dashboard/routes';
import posts from 'admin/routes/posts/routes';

export default (
  <Route>
    {/*<Route path="setup" component={SetupView} />*/}
    <Route path="admin" component={AdminContainer}>
      {dashboard}
      {posts}
    </Route>
  </Route>
);
