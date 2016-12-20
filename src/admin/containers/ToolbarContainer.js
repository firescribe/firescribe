import React from 'react';

function ToolbarContainer({ title, children }) {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <span style={styles.title}>{title}</span>
      </div>
      {children}
    </div>
  );
}

const styles = {
  background: {
    backgroundColor: '#039be5',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    paddingLeft: 24,
    padddingRight: 56,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 24,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
};

export default ToolbarContainer;
