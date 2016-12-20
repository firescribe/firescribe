import React from 'react';
import NavTabs, { Tab } from 'admin/components/NavTabs';
import ToolbarContainer from 'admin/containers/ToolbarContainer';

function to(path = '') {
  return `/admin/dashboard${path}`;
}

function Toolbar() {
  return (
    <ToolbarContainer
      title={'Dashboard'}
    >
      <NavTabs>
        <Tab to={to()}>Overview</Tab>
        <Tab to={to('/analytics')}>Analytics</Tab>
        <Tab to={'/admin/dashboard/analytics'}>Analytics</Tab>
        <Tab to={'/admin/dashboard/analytics'}>Analytics</Tab>
        <Tab to={'/admin/dashboard/analytics'}>Analytics</Tab>
        <Tab to={'/admin/dashboard/analytics'}>Analytics</Tab>
        <Tab to={'/admin/dashboard/analytics'}>Last</Tab>
      </NavTabs>
    </ToolbarContainer>
  );
}

export default Toolbar;
