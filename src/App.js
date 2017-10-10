import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Datos from './Datos'; 

import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom';

class App extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/datos" component={Datos} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
export default App;
