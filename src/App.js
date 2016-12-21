import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Measure from 'react-measure';
import brandColors from 'admin/helpers/brand';
import { updateWidth } from 'actions/WindowActions';
import SetupView from 'admin/routes/setup/views/Setup';
import { syncConfig } from 'actions/SyncActions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500, red700, red100, grey900, grey600, redA200, white } from 'material-ui/styles/colors';

console.log(brandColors)
const muiThemed = getMuiTheme({
    palette: {
        primary1Color: red700,
        primary2Color: red500,
        primary3Color: red100,
        accent1Color: redA200,
        textColor: grey900,
        alternateTextColor: white,
    }
});
    console.log(muiThemed)

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
                <MuiThemeProvider muiTheme={muiThemed}>
                    <div style={{ width: '100%', height: '100vh', display: 'table' }}>
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

    // let children = this.props.children;

    // if (!config.response.initialized) {
      let children = <SetupView />;
    // }

        return (
            <MuiThemeProvider muiTheme={muiThemed}>
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
