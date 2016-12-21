import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

function ToolbarContainer({ title, children, muiTheme }) {
  return (
    <div style={{background: muiTheme.palette.primary2Color}}>
      <div style={styles.container}>
        <span style={styles.title}>{title}</span>
      </div>
      {children}
    </div>
  );
}

const styles = {
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

export default muiThemeable()(ToolbarContainer);
