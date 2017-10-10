import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


const SignUp = ({model}) => {
	return (
		  <div>
   			<header className="text-center">
				<div className="previus">
					<a href=" "><i className="fa fa-angle-left fa-3x" aria-hidden="true"></i></a>
				</div>
				<h1>Sign up</h1>
				<h4>Join now for free ride credit</h4>
				<hr/>

			</header>
	  		<section className="container">
	  			<div className="phone container">
			 		 <div className="row">
			  			<div className="col-sm-3 col-xs-3">
					  		<div className="dropdown">
						  		<div className="dropdown-toggle" data-toggle="dropdown">
							  		<img className="img-responsive" src="http://painternacional.com/img/logos/peru-bandera.png"/>
						  	  		
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
							<input type="text" id="codigo" value="+51" readonly/>
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
	        			<div class="ocultar alert alert-warning text-center">
		      				<p>Ingrese este codigo: LAB- <span id="codigo-div"></span></p>
		      			</div>
	  		</section>
	  		<div className="next">
		  		<NavLink to={"/signup-form"}
			         className="btn btn-lyft btn-lg btn-block">
					Next
				</NavLink>
	 		</div>
 		 </div> 
	);
}

export default SignUp;
