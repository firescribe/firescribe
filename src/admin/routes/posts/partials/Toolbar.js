import React from 'react';
import NavTabs, { Tab } from 'admin/components/NavTabs';
import ToolbarContainer from 'admin/containers/ToolbarContainer';

function to(path = '') {
  return `/admin/posts${path}`;
}

function Toolbar() {
  return (
    <ToolbarContainer
      title={'Dashboard'}
    >
      <NavTabs>
        <Tab to={to()}>Overview</Tab>
        <Tab to={to('/new')}>New</Tab>
        <Tab to={to('/stats')}>Stats</Tab>
      </NavTabs>
    </ToolbarContainer>
  );
}

export default Toolbar;
