import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout, { CenterLayout, FullwidthLayout } from 'admin/components/Layouts';
import Toolbar from 'admin/routes/posts/partials/Toolbar';
import ManagePosts from 'admin/routes/posts/partials/ManagePosts';
import NewPost from 'admin/routes/posts/partials/NewPost';

export default (
    <Route path="posts" components={{ layout: Layout, toolbar: Toolbar }}>
        <Route component={FullwidthLayout}>
            <IndexRoute component={ManagePosts}/>
        </Route>
        <Route component={CenterLayout}>
            <Route path="new" component={NewPost} />
        </Route>
    </Route>
);
