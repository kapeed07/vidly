import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Menu } from "antd";

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">
            Vidly
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            Movies
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/customers">
          Customers
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/rentals">
            Rentals
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register">
            Register
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
 
export default NavBar;