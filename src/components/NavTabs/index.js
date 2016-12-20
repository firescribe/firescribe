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
      style={styles.linkContainer}
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

    // Find the currently active tab
    React.Children.forEach(props.children, (child, index) => {
      if (context.router.isActive(child.props.to)) {
        this.initialTab = index;
      }
    });

    this.state = {
      showPagination: false,
      parentWidth: 0,
      childWidth: 0,
      transformX: 0,
      left: 0,
      width: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const previousParent = this.state.parentWidth;
    const nextParent = nextState.parentWidth;
    const previousChild = this.state.previousChild;
    const nextChild = nextState.childWidth;

    // If we have both parent & child widths & the child is greater than the parent
    if (nextParent !== 0 && nextChild !== 0 && nextParent !== previousParent && nextChild !== previousChild) {
      this.setState({
        translateX: nextParent > nextChild ? 0 : this.state.tabsPosition,
        showPagination: nextChild > nextParent,
      });
    }
  }

  /**
   * Move the active bar into position under the
   * tab index
   * @param index
   */
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

  /**
   * Set the width of the NabTabs container
   * @param width
   */
  setParentWidth(width) {
    this.setState({
      parentWidth: width,
    });
  }

  /**
   * Set the width of the children tabs
   * @param index
   * @param width
   */
  setChildWidth(index, width) {
    this.widths[index] = width;
    if (index + 1 === React.Children.count(this.props.children)) {
      this.moveActiveBar(this.initialTab);

      // Calculate the total children widths
      this.setState({
        childWidth: this.widths.reduce((a, b) => {
          return a + b;
        }, 0),
      });
    }
  }

  /**
   * On left page icon press
   */
  pageLeft() {
    if(this.state.transformX === 0) return

    this.setState({
      transformX: this.state.transformX - 100,
    });
  }

  /**
   * On right page icon press
   */
  pageRight() {
    const remaining = this.state.childWidth - this.state.transformX;
    if(this.state.childWidth - this.state.parentWidth < this.state.transformX) return
    this.setState({
      transformX: this.state.transformX + 100,
    });
  }

  /**
   * Render the individual tab items
   * @returns {XML}
   */
  renderTabs() {
    return (
      <div style={Object.assign({}, styles.tabContainer, { width: this.state.childWidth, transform: `translate3d(-${this.state.transformX}px, 0px, 0px)` })}>
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
        <div style={Object.assign({}, styles.activeBar, { width: this.state.width, left: this.state.left })}></div>
      </div>
    );
  }

  /**
   * Render the NavTabs
   * @returns {XML}
   */
  render() {
    return (
      <Measure
        whitelist={['width']}
        onMeasure={(dimensions) => this.setParentWidth(dimensions.width)}
      >
        <div style={{ position: 'relative' }}>
          {this.state.showPagination && <div style={styles.pageLeft} onClick={() => this.pageLeft()}>{' < '}</div>}
          <div style={Object.assign({}, styles.container, this.props.style, this.state.showPagination ? { marginLeft: 40, marginRight: 40 } : null)}>
            {this.renderTabs()}
          </div>
          {this.state.showPagination && <div style={styles.pageRight} onClick={() => this.pageRight()}>{' > '}</div>}
        </div>
      </Measure>
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
    overflow: 'hidden',
    height: 48,
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    transition: 'all 300ms ease',
  },
  linkContainer: {
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
  pageLeft: {
    cursor: 'pointer',
    position: 'absolute',
    left: 0,
    color: '#ffffff',
    fontSize: 17,
    padding: 15,
  },
  pageRight: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#ffffff',
    fontSize: 17,
    padding: 15,
  },
  activeBar: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#ffffff',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
};

export default NavTabs;
