import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { WindowResizeListener } from 'react-window-resize-listener';

import { updateWidth } from 'actions/WindowActions';
import SetupView from 'admin/routes/setup';
import { syncConfig } from 'actions/SyncActions';

WindowResizeListener.DEBOUNCE_TIME = 300;

class App extends Component {

  constructor(props) {
    super();
    props.syncConfig();
  }

  /**
   * Render the CMS
   */
  render() {
    const config = this.props.config;

    if (!config.loaded) {
      return null;
    }

    let children = this.props.children;

    if (!config.response.initialized) {
      children = <SetupView />;
    }

    return (
      <MuiThemeProvider>
        <div>
          <WindowResizeListener onResize={this.props.updateWidth} />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  syncConfig: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
};

function select(state) {
  return {
    config: state.config,
  };
}

function actions(dispatch) {
  return {
    updateWidth: ({ windowWidth }) => dispatch(updateWidth(windowWidth)),
    syncConfig: () => dispatch(syncConfig()),
  };
}

export default connect(select, actions)(App);
