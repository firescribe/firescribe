import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link as RouterLink } from 'react-router';
import Measure from 'react-measure';

// TODO cleanup/comments/propTypes

export function Link({ to, children, onClick }) {
  return (
    <RouterLink
      onClick={() => onClick()}
      to={to}
      style={styles.tabContainer}
    >
      {children}
    </RouterLink>
  );
}

class NavTabs extends Component {

  constructor(props, context) {
    super(props, context);

    this.initialTab = 0;
    this.widths = [];

    React.Children.forEach(props.children, (child, index) => {
      if (context.router.isActive(child.props.to)) {
        this.initialTab = index;
      }
    });

    this.state = {
      hasAllWidths: false,
      left: 0,
      width: 0,
    };
  }

  moveActiveBar(index) {
    const width = this.widths[index];
    let left = 0;

    for (let i = 0; i < index; i++) {
      left += this.widths[i];
    }

    this.setState({
      left,
      width,
    });
  }

  setChildWidth(index, width) {
    this.widths[index] = width;
    if (index + 1 === React.Children.count(this.props.children)) {
      this.moveActiveBar(this.initialTab)
    }
  }

  render() {
    return (
      <div style={Object.assign(styles.container, this.props.style)}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {React.Children.map(this.props.children, (child, index) => {
            return (
              <Measure
                whitelist={['width']}
                onMeasure={(dimensions) => {
                  this.setChildWidth(index, dimensions.width);
                }}
              >
                {React.cloneElement(child, {
                  onClick: () => this.moveActiveBar(index),
                })}
              </Measure>
            );
          })}
        </div>
        <div style={Object.assign({}, styles.activeBar, { width: this.state.width, left: this.state.left })}></div>
      </div>
    );
  }
}

NavTabs.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  tabContainer: {
    display: 'flex',
    minWidth: 100,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: 14,
  },
  activeBar: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#ffffff',
    transition: 'all 300ms ease',
  },
};

export default NavTabs;
