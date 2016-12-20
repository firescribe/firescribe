import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import DrawerContainer from './DrawerContainer';
import ToolbarContainer from './ToolbarContainer';

class AdminContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: props.isDesktop,
    };
  }

  toggleDrawerState() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title={'Firescribe'}
          showMenuIconButton={!this.props.isDesktop}
          onLeftIconButtonTouchTap={this.toggleDrawerState.bind(this)}
        />
        <DrawerContainer
          isOpen={this.props.isDesktop ? true : this.state.drawerOpen}
          isDesktop={this.props.isDesktop}
          onClose={this.toggleDrawerState.bind(this)}
        />
        <div style={{ marginLeft: this.props.isDesktop ? 256 : 0 }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    isDesktop: state.window.isDesktop,
  }
}

export default connect(select)(AdminContainer);
