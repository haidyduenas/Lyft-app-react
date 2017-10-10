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
                                <ul>
                                    <li className="btn btn-default btn-lg active init"><NavLink className="btn btn-default btn-lg active init" to="/home">Sing Up</NavLink ></li>
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
				<section className="container-fluid form">
					<label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange} required/>
							I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>
							{this.state.goFordward ?<NavLink to={"/lyftmap"}className="btn btn-lg btn-block btn-lyft">Next</NavLink>
								:<button className="btn btn-lg btn-block btn-lyft disabled">Next</button>}
				</section>
            </form>
            </div>
		);
/*
		return (
			<div>
				<header>
					<nav className="navbar navbar-light text-center">
						<a href="javascript:window.history.back();">
							<i
								className="fa fa-angle-left fa-3x"
								aria-hidden="true" />
						</a>
						<div className="navbar-brand">
							<h3>
								Sign Up Form
							</h3>

						</div>
					</nav>
				</header>
				<section className="container-fluid form">

					<label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
					</label>

					{
						this.state.goFordward ?
							<NavLink
								to={"/lyftmap"}
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button
								className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

				</section>
			</div>

		);
		*/
	}
}

export default SignUpForm;