import React from 'react';

function Layout({ children }) {
    return (
        <div style={styles.container}>{children}</div>
    );
}

const styles = {
  container: {
      margin: 24,
  },
};

export default Layout;
