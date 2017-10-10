import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
		}
	}

	render () {
		const {model} = this.props;
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}
		return (
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-xs-2">
                                <div className="back-page1 text-center">
									<NavLink className="btn btn-default btn-lg active init" to="/signup">&lt;</NavLink >
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
				<div class="container-fluid">
            		<div class="container">
                		<div class="row">
                    		<div class="col-md-12 col-sm-12 col-xs-12 text-center">
            					<form data-toggle="validator">
                					<div className="form-group row">
										<div className="col-lg-12 col-md-6 col-xs-6 input-group">
										<span className="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    					<input type="text" className="form-control inputName"placeholder="Your Name" required/>
               						 	</div>
									</div>
                					<div className="form-group row">
										<div className="col-lg-12 col-md-6 col-xs-6 input-group">
										<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i> </span>
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
