import React, { Component, PropTypes } from 'react';
import firebase from 'services/firebase';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { updateWidth } from 'actions/WindowActions';
import { syncConfig } from 'actions/SyncActions';

class SetupView extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: true,
      finished: false,
      stepIndex: 0,
    }
  }

  componentDidMount() {
    // if(firebase) {
    //   this.setState({loading: false, stepIndex: 1});
    // }
    //
    // let ticker = setInterval(() => {
    //   if(firebase) {
    //     this.setState({loading: false, stepIndex: 1});
    //     clearInterval(ticker);
    //   } else {
    //     console.log('miss')
    //   }
    // }, 500)
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
   const {stepIndex} = this.state;

   return (
     <div style={{margin: '12px 0'}}>
       <RaisedButton
         label={this.state.stepIndex === 2 ? 'Finish' : 'Next'}
         disableTouchRipple={true}
         disableFocusRipple={true}
         primary={true}
         onTouchTap={this.handleNext.bind(this)}
         style={{marginRight: 12}}
       />
       {step > 0 && (
         <FlatButton
           label="Back"
           disabled={this.state.stepIndex === 0}
           disableTouchRipple={true}
           disableFocusRipple={true}
           onTouchTap={this.handlePrev.bind(this)}
         />
       )}
     </div>
   );
 }


  /**
   * Render the CMS
   */
  render() {
    if(!this.state.loading) {
      return (
        <div style={{width: '100%', height: '100vh', display: 'table'}}>
          <div style={{
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}>
            <CircularProgress />
            <h4>Attempting to connect to Firebase... Did you read the <a href="#">Setup guide</a>?</h4>
          </div>
        </div>
      );
    };

    return (
      <div style={{width: '100%', height: '100vh'}}>
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <Stepper activeStep={this.state.stepIndex} orientation="vertical">
            <Step>
              <StepLabel>Firebase Setup</StepLabel>
              <StepContent>
                <p>
                  Please refer to the <a href="#">setup guide</a> to set up your Firebase connection
                </p>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
              <StepContent>
                <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
              <StepContent>
                <p>
                  Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>
          {this.state.finished && (
            <p style={{margin: '20px 0', textAlign: 'center'}}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          )}
        </div>
      </div>
    );
  }
}

SetupView.propTypes = {
  config: PropTypes.object.isRequired,
};

function select(state) {
  return {
    config: state.config,
  };
}


export default connect(select)(SetupView);
