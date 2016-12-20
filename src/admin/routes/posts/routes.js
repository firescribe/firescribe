import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ContentContainer from 'admin/containers/ContentContainer';
import ManagePosts from 'admin/routes/posts/partials/ManagePosts';
import Toolbar from 'admin/routes/posts/partials/Toolbar';

export default (
  <Route component={Toolbar}>
    <Route path="posts" component={ContentContainer}>
      <IndexRoute />
      <Route path="create" />
    </Route>
  </Route>
);
