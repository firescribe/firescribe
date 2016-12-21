import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import DrawerContainer from './DrawerContainer';

class AdminContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: props.isDesktop,
    };
  }

  /**
   * Toggle the drawer open/closed
   */
  toggleDrawerState() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  /**
   * Render Firescribe
   */
  render() {
    console.log('-->', this.props)
    return (
      <div>
        <AppBar
          showMenuIconButton={!this.props.isDesktop}
          onLeftIconButtonTouchTap={this.toggleDrawerState.bind(this)}
          title={<div><img style={{width: 40, marginLeft: -10, position: 'relative', top: 5,}} src="https://firebasestorage.googleapis.com/v0/b/firecms-1826a.appspot.com/o/firelogo.png?alt=media&token=acf6a41f-6415-4c72-9879-0a1869a6211f" alt="Firescribe logo"/>{this.props.config.response.websiteTitle}</div>}
        />
        <DrawerContainer
          isOpen={this.props.isDesktop ? true : this.state.drawerOpen}
          isDesktop={this.props.isDesktop}
          onClose={this.toggleDrawerState.bind(this)}
          headerText={this.props.config.response.websiteTitle}
        />
        <div style={{ marginLeft: this.props.isDesktop ? 256 : 0 }}>
          {this.props.toolbar}
          {this.props.layout}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    isDesktop: state.window.isDesktop,
    config: state.config,
  }
}

export default connect(select)(AdminContainer);
