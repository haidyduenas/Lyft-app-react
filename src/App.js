import React, { Component } from 'react';
import './App.css';
import Datos from './Datos'; 

import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom';

const Home = () => {
  return(<div className="index">
   <section className="bienvenida">
      <div className="container-fluid">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                      <img src="http://www.whatsthefare.com/static/img/lyft_logo.png" alt="" width="150"/>
                  </div>
              </div>
          </div>
           <div className="container btn-login">
               <div className="row">
                   <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                       <a to="/about" className="btn btn-default btn-lg active login" role="button">Log in</a>
                   </div>
                   <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                   <ul>
                   <li className="btn btn-default btn-lg active init"><Link className="btn btn-default btn-lg active init" to="/datos">Sing Up</Link></li>
                    </ul>
               </div>
               </div>
           </div>
       </div>
   </section>
</div>);
}


class App extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/datos" component={Datos} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
export default App;
