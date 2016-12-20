import React from 'react';

function ContentContainer({ toolbar, children, ...props }) {
  console.log('content', toolbar)
  return (
    <div>
      {toolbar || null}
      <div style={styles.container}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
};

export default ContentContainer;
