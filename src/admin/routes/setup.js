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
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
class SetupView extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: true,
      finished: false,
      stepIndex: firebase ? 1 : 0,
      Name: '',
      Email: '',
      Password: '',
      Categories: '',
    }
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  renderStepActions(step) {
   return (
     <div style={{margin: '12px 0'}}>
       <RaisedButton
         label={this.state.stepIndex === 3 ? 'Finish' : 'Next'}
         disableTouchRipple={true}
         disableFocusRipple={true}
         primary={true}
         onTouchTap={this.state.stepIndex === 3 ? this.sendToDatabase.bind(this) : this.handleNext.bind(this)}
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
  handleRequestDelete(key) {
   const tagToDelete = this.state.Categories.map((Categories) => Categories.key).indexOf(key);
   this.state.Categories.splice(tagToDelete, 1);
   this.setState({Categories: tagToDelete});
  };

  renderChip(data, key) {
   return (
     <Chip
       key={key}
       onRequestDelete={() => this.handleRequestDelete(data.key).bind(this)}
       style={{margin: 4}}
     >
       {data.replace(/[^a-zA-Z ]/g, "")}
     </Chip>
   );
  }

  handleChange(event) {
   const inputValue = event.target.value;
   this.setState({
     [event.target.id.split('-')[2]]: inputValue,
   });
  };

  sendToDatabase() {
    // @TODO validation
    if(!this.state.WebsiteTitle) return;
    // if(!this.state.websiteLogo) return;
    if(!this.state.Name) return;
    if(!this.state.Email) return;
    if(!this.state.Password) return;
    if(!this.state.Categories) return;

    this.setState({finished: true})

    setTimeout(() => {
      firebase.database().ref('config').update({
        websiteTitle: this.state.WebsiteTitle,
        // websiteLogo: this.state.websiteLogo,
        ownerName: this.state.Name,
        contactEmail: this.state.Email,
        metaTags: this.state.Categories,
        initialized: true,
      })
    }, 3000)

  }

  /**
   * Render the CMS
   */
  render() {
    if(!this.state.loading || this.state.finished) {
      return (
        <div style={{width: '100%', height: '100vh', display: 'table'}}>
          <div style={{
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
          }}>
            <CircularProgress />
            <h4>Working...</h4>
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
              <StepLabel>Howdy!</StepLabel>
              <StepContent>
                <p>
                  What should we call the website?
                </p>
                <TextField
                  hintText="My Awesome Blog"
                  floatingLabelText="Website Title"
                  onChange={this.handleChange.bind(this)}
                /><br />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Who are you?</StepLabel>
              <StepContent>
                <p>This will be your Administrative account, please keep the details safe.</p>
                <TextField
                  hintText="Company/ Your name"
                  floatingLabelText="Name"
                  onChange={this.handleChange.bind(this)}
                /><br />
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                  onChange={this.handleChange.bind(this)}
                /><br />
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  onChange={this.handleChange.bind(this)}
                  type="password"
                /><br />
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Tell the world!</StepLabel>
              <StepContent>
                <p>
                  Before you head off dominating the world with your blog, please take the time to 'tag' your site. e.g. Arts, Crafts, Design
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap',}}>
                  {this.state.Categories === '' ? <div></div> : this.state.Categories.split(', ').map(this.renderChip.bind(this))}
                </div>
                <TextField
                  hintText="Start typing"
                  floatingLabelText="Categories"
                  onChange={this.handleChange.bind(this)}
                />
                <br />
                {this.renderStepActions(3)}
              </StepContent>
            </Step>
          </Stepper>
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
