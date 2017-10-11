import React, {Component} from 'react';
import './App.css';
import './Code.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class HeaderApp extends Component{
	render(){return(
	  <header>
		<div className="btnVolver">
		  <NavLink to="/code">
			<i className="material-icons volver">keyboard_arrow_left</i>
		  </NavLink>
		</div>
		<h1 className="text-center">Sign Up</h1>
		<h4 className="text-center">Join Now for free ride credit.</h4>
		<hr/>
	  </header>);
	}
  }
class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
		}
	}

	render () {
		const {model} = this.props;
		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}
		return (
            <div>
                <HeaderApp/>
				<div className="container-fluid">
            		<div className="container">
                		<div className="row">
                    		<div className="col-md-12 col-sm-12 col-xs-12 text-center">
            					<form data-toggle="validator">
                					<div className="form-group row">
										<div className="col-lg-12 col-md-6 input-group">
										<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    					<input type="text" className="form-control inputName"placeholder="Your Name" required/>
               						 	</div>
									</div>
                					<div className="form-group row">
										<div className="col-lg-12 col-md-6 input-group">
										<span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i> </span>
                    					<input type="email" className="form-control inputEmail"  placeholder="Email" data-error="Bruh, that email address is invalid" required/>
                    					</div>
										<div className="help-block with-errors"></div>
                					</div>
									<section className="container-fluid form">
										<label className="form-check-label">
											<input className="form-check-input agreeUser" type="checkbox" onChange={onInputChange} required/>
											I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
										</label>
										{this.state.goFordward ?<NavLink to={"/lyftmap"}className="btn btn-lg btn-block btn-lyft">Next</NavLink>
										:<button className="btn btn-lg btn-block btn-lyft disabled">Next</button>}
									</section>
           						 </form>
							</div>
            			</div>
        			</div>
				</div>
            </div>
		);
	}
}

export default SignUpForm;
