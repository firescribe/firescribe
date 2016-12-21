import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  /**
   * Handle onChange events by running them through
   * any validator props that have been given
   * @param e
   */
  onChange(e) {
    const onChange = this.props.onChange;
    const validator = this.props.validator;
    const value = e.target.value;

    if (validator) {
      this.setState({
        error: value ? validator(value) : null,
      });
    }

    if (onChange) onChange(e);
  }

  render() {
    const props = { ...this.props };
    delete props.validator;

    return (
      <TextField
        {...props}
        onChange={this.onChange.bind(this)}
        errorText={this.state.error}
      />
    );
  }

}
