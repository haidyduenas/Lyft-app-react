import React, { Component } from 'react';
import Home from './Home'; 
import './App.css';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom';

class Datos extends Component {
	render() {
		return (
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-xs-2">
                                <div className="back-page1 text-center">
                                <ul>
                                    <li className="btn btn-default btn-lg active init"><Link className="btn btn-default btn-lg active init" to="/home">Sing Up</Link ></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <div className="title-signup text-center">
                                    <h1>Sign up</h1>
                                    <p>Join now for free ride credit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <form data-toggle="validator">
                <div className="form-group">
                    <label htmlFor="inputName" className="control-label">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Cina Saffary" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="control-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required/>
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="terms" data-error="Before you wreck yourself" required/>
                            Check yourself
                        </label>
                    <div className="help-block with-errors"></div>
                    </div>
                    </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
		);
	}
}

export default Datos;