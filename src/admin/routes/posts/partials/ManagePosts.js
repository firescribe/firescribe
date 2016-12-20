import React from 'react';
import NavTabs, { Link } from 'components/NavTabs';
import ToolbarContainer from 'admin/containers/ToolbarContainer';
import RenderPosts from './RenderPosts';

function ManagePosts({ children }) {
  return (
    <div>
      <ToolbarContainer
        title={'Posts'}
      >
        <NavTabs>
          <Link to={'/admin/posts'}>Overview</Link>
          <Link to={'/admin/posts/create'}>Create</Link>
          <Link to={'/admin/posts/edit'}>Edit</Link>
          <Link to={'/admin/posts/settings'}>Settings</Link>
        </NavTabs>
      </ToolbarContainer>
      <RenderPosts />
    </div>
  );
}

export default ManagePosts;
