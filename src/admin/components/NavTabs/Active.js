import React from 'react';

import styles from './styles';

function Active({ offset, width }) {
  return (
    <div
      style={Object.assign({}, styles.activeBar, {
        width: width || 0,
        left: offset || 0,
      })}
    ></div>
  );
}

Active.propTypes = {
  offset: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Active;
