import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Measure from 'react-measure';

import { updateWidth } from 'actions/WindowActions';
import SetupView from 'admin/routes/setup';
import { syncConfig } from 'actions/SyncActions';

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
      return (
        <MuiThemeProvider>
          <div style={{width: '100%', height: '100vh', display: 'table'}}>
            <div style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}>
              <CircularProgress />
            </div>
          </div>
        </MuiThemeProvider>
      );
    }

    let children = this.props.children;

    if (!config.response.initialized) {
      children = <SetupView />;
    }

    return (
      <MuiThemeProvider>
        <Measure
          whitelist={['width']}
          onMeasure={this.props.updateWidth}
        >
          <div>
            {children}
          </div>
        </Measure>
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
    updateWidth: ({ width }) => dispatch(updateWidth(width)),
    syncConfig: () => dispatch(syncConfig()),
  };
}

export default connect(select, actions)(App);
