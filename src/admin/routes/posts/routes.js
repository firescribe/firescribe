import React from 'react';
import { IndexRoute, Route } from 'react-router';

import ManagePosts from 'admin/routes/posts/partials/ManagePosts';

export default (
  <Route path="posts" component={ManagePosts}>
    <IndexRoute />
    <Route path="create" />
  </Route>
);
