import React, { Component } from 'react';
import Datos from './Datos';
import './App.css';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom';

  class Home extends Component {
    render() {
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
                        <li><Link className="btn btn-default btn-lg active init" to="/datos">Sing Up</Link ></li>
                         </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
     </div>);
    }
  }

export default Home;