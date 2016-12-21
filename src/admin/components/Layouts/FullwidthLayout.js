import React from 'react';

function FullwidthLayout({ children }) {
    return (
        <div style={styles.container}>{children}</div>
    );
}

const styles = {
  container: {
      margin: '0 auto',
      maxWidth: 1600,
  },
};

export default FullwidthLayout;
