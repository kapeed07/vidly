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
    // console.log(result)
    if(!result.error)
      return null;
    
    let errors = {};
    result.error.details.map(item => {
      return errors[item.path[0]] = item.message
    })

    return errors;
    // const errors = {};
    // const { data } = this.state;
    // if (data.username.trim() === '')
    //   errors.username = "Username is required."
    // if (data.password.trim() === '')
    //   errors.password = "Password is required."
    // return Object.keys(errors).length === 0 ? null : errors;
  }
  
  validProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)

    return error ? error.details[0].message: null;
    // if(name === "username")
    //   if(value.trim().length === 0)
    //     return "Username is required."
    // if(name === "password")
    //   if(value.trim().length === 0)
    //     return "Password is required."
  }

  handleSubmit = (e) => {
    const errors = this.validate();

    // const errorMessage = this.validProperty(e);

    this.setState({ errors })

    if (this.state.errors) {
      return;
    } else {
      this.doSubmit()
    }
    


    
    
    // .form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
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