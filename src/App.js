import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col } from 'antd';
import Movies from "./components/movies"
import Rentals from "./components/rental"
import NavBar from './components/common/navBar';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import NotFound from './components/not-found';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

function App() {
  return (
    <Row>
      <NavBar />
      <Col span={12} offset={6}>
        <Switch>
          <Route path="/register" component={ RegisterForm } />
          <Route path="/login" component={ LoginForm } />
          <Route path="/movies/:id" component={ MovieForm } />
          <Route path="/movies" component={ Movies } />
          <Route path="/customers" component={ Customers } />
          <Route path="/rentals" component={ Rentals } />
          <Route path="/not-found" component={ NotFound } />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </Col>
    </Row>
  );
}

export default App;
