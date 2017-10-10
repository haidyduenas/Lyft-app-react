import React, { Component } from 'react';
import './App.css';

class Datos extends Component {
	render() {
		return (
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
		);
	}
}

export default Datos;