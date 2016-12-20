import React from 'react';
import { Link } from 'react-router';

import styles from './styles';

function Tab({ to, children, onClick }) {
  return (
    <Link
      onClick={() => onClick && onClick()}
      to={to}
      style={styles.linkContainer}
    >
      {children}
    </Link>
  );
}

Tab.propTypes = {
  to: Link.propTypes.to,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Tab;
