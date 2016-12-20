import React, { Component } from 'react';
import Measure from 'react-measure';

import Active from './Active';
import styles from './styles';

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
      activeOffset: 0,
      activeWidth: 0,
    };
  }

  /**
   * Handle updates to width changes
   * @param nextProps
   * @param nextState
   */
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
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += this.widths[i];
    }

    this.setState({
      activeOffset: offset,
      activeWidth: this.widths[index],
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
    if (this.state.transformX !== 0) {
      this.setState({
        transformX: this.state.transformX - 180,
      });
    }
  }

  /**
   * On right page icon press
   */
  pageRight() {
    if ((this.state.childWidth - this.state.parentWidth) > this.state.transformX) {
      this.setState({
        transformX: this.state.transformX + 180,
      });
    }
  }

  /**
   * Render the individual tab items
   */
  renderTabs() {
    return (
      <div
        style={Object.assign({}, styles.tabContainer, {
          width: this.state.childWidth,
          transform: `translate3d(-${this.state.transformX}px, 0px, 0px)`
        })}
      >
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
        <Active width={this.state.activeWidth} offset={this.state.activeOffset} />
      </div>
    );
  }

  /**
   * Render the NavTabs
   */
  render() {
    return (
      <Measure
        whitelist={['width']}
        onMeasure={(dimensions) => this.setParentWidth(dimensions.width)}
      >
        <div style={{ position: 'relative' }}>
          {this.state.showPagination && <div style={styles.pageLeft} onClick={() => this.pageLeft()}>{' < '}</div>}
          <div
            style={Object.assign({}, styles.container, this.props.style, this.state.showPagination ? {
              marginLeft: 40,
              marginRight: 40
            } : null)}>
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

export { default as Tab } from './Tab';
export default NavTabs;
