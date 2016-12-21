import React from 'react';

function CenterLayout({ children }) {
    return (
        <div style={styles.container}>{children}</div>
    );
}

const styles = {
  container: {
      margin: '0 auto',
      maxWidth: 1136,
  },
};

export default CenterLayout;
