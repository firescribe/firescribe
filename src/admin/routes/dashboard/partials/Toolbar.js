import React from 'react';
import NavTabs, { Link } from 'components/NavTabs';
import ToolbarContainer from 'admin/containers/ToolbarContainer';

function Toolbar({ children }) {
  return (
    <div>
      <ToolbarContainer
        title={'Dashboard'}
      >
        <NavTabs>
          <Link to={'/admin/dashboard'}>Overview</Link>
          <Link to={'/admin/dashboard/analytics'}>Analytics / Activity</Link>
        </NavTabs>
      </ToolbarContainer>
      {children}
    </div>
  );
}

export default Toolbar;
