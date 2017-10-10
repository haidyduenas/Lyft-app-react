import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './App.css';
class Code extends Component {
    
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
	      				<div className="row">
		      				<div className="col-xs-12 col-sm-12 text-center">
		    		 			 <p>Well send you a text to verify your phone</p>
		      				</div>
	    				</div>
	        			<div className="ocultar alert alert-warning text-center">
		      				<p>Ingrese este codigo: LAB- <span id="codigo-div"></span></p>
                              <div className="col-xs-12 col-sm-12 text-center">
                              <NavLink to={"/signup-form"}className="btn btn-lyft btn-lg btn-block">
					            Next
				             </NavLink>
                             </div>
		      			</div>
                </div>
            );

        }
    }
    
    export default Code;