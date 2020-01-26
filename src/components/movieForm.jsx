import React, { Component } from 'react';
// import queryString from "query-string";

import { Link } from "react-router-dom";

import {
  Button
} from "antd";

class movieForm extends Component {
  state = {  }
  render() { 
    // const result = queryString.parse(this.props.location.search)
    return (
      <div>
        <p>
          Movie Id - { this.props.match.params.id }
        </p>

        <Link to="/movies">
          <Button type="primary">Save</Button>
        </Link>
      </div>
    );
  }
}
 
export default movieForm;