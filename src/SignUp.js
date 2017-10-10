import React, {Component} from 'react';
import './App.css';
import {
	NavLink
} from 'react-router-dom'


const SignUp = ({model}) => {
	return (
  			<div>
                <div className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-md-2 col-sm-2 col-xs-2">
							<div className="back-page1 text-center">
								<NavLink className="btn btn-default btn-lg active init" to="/home">&lt;</NavLink >
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
	  		<section className="container">
	  		<div className="phone container">
			  	<div className="row">
			  		<div className="col-sm-3 col-xs-3">
					  	<div className="dropdown">
						  	<div className="dropdown-toggle" data-toggle="dropdown">
							  	<img className="img-responsive" src="http://painternacional.com/img/logos/peru-bandera.png"/>
						  	  	<span className="caret"></span>
						 	</div>
						  
							<ul className="dropdown-menu">
								<li>
									<a id="+51" href="#">
									<img className="img-responsive" src="http://painternacional.com/img/logos/peru-bandera.png"/> Perú</a>
								</li>
								<li>
									<a id="+56" href="#">
									<img className="img-responsive" src="http://www.banderasysoportes.es/WebRoot/StoreES3/Shops/ec4701/5263/E9E0/9BA2/ECED/9429/AC10/140A/62FD/Chile.png"/> Chile</a>
								</li>
								<li>
									<a id="+52" href="#">
									<img className="img-responsive" src="http://smartleges.com/wp-content/themes/smartleges/images/flags/mx.png"/> Mexico</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-2 col-sm-2 col-xs-2">
						<input type="text" id="codigo" value="+51" readOnly/>
					</div>
					<div className="col-sm-7 col-xs-7">
						<input type="number" id="telefono" placeholder="123456789"/>
					</div>
				</div>
			</div>
			<div className="row">
		      	<div className="col-xs-12 col-sm-12 text-center">
		    		  <p>Well send you a text to verify your phone</p>
		      	</div>
	    	</div>
	       
	  	</section>
	
	  	<div className="next">
		  	<NavLink to={"/code"}
			    className="btn btn-lyft btn-lg btn-block">
				Next
			</NavLink>
	 	</div>
 	</div> 
		 
	);
}

export default SignUp;

