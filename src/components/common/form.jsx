import React, { Component } from 'react';

import Joi from "joi-browser";
class Form extends Component {
  state = { 
    data : {},
    errors: {}
  }

  validate = () => {
    let result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    })
    if(!result.error) {
      return null;
    }
    let errors = {};
    result.error.details.map(item => {
      return errors[item.path[0]] = item.message
    })
    return errors;
  }
  
  validProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)

    return error ? error.details[0].message: null;
  }

  handleSubmit = (e) => {
    const errors = this.validate();
    this.setState({ errors })

    if (this.state.errors) {
      return;
    } else {
      this.doSubmit()
    }
  };

  handleChange = (e) => {
    const errorMessage = this.validProperty(e.currentTarget);
    let { errors } = this.state;
    errors[e.currentTarget.name] = errorMessage;

    const data = {...this.state.data};
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  }

  renderButton = (label) => {
    return (
        <button disable={this.validate()} onClick={ this.handleSubmit } className="login-form-button">
          {label}
        </button>
      )
  }

  renderSelect = (name, label, options) => {
    return (
      <div>
        <select onChange={ this.handleChange } name={name} placeholder={label}>
          <option value="">Select genre</option>
          {options.map(option => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        <p>
          { this.state.errors ? this.state.errors[name] : "" }
        </p>
      </div>
      )
  }

  renderInput = (name, label, type = 'text') => {
    return (
      <div>
        <input type={type} onChange={ this.handleChange } name={name} placeholder={label} />
        <p>
          { this.state.errors ? this.state.errors[name] : "" }
        </p>
      </div>
      )
  }
  
  render() { 
    return (
      <React.Fragment></React.Fragment>
    );
  }
}
 
export default Form;