import React, {Component} from 'react';
import './App.css';
import {
	NavLink
} from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.countriesFlag = [
      	{ 
			pais: "Peru",
			img: "http://painternacional.com/img/logos/peru-bandera.png",
			countriesCode: "+51",
			numbers: 9,
			
		},
     	 { 
			pais: 'Mexico', 
			img: "http://smartleges.com/wp-content/themes/smartleges/images/flags/mx.png", 
			countriesCode: '+52', 
			numbers: 9
			  
		},
      	{ 
			pais: 'Chile', 
			img: "http://www.banderasysoportes.es/WebRoot/StoreES3/Shops/ec4701/5263/E9E0/9BA2/ECED/9429/AC10/140A/62FD/Chile.png", 
			countriesCode: '+56', 
			numbers: 9
		}
		];
			this.state = {
			selectFlag: 0,
			
			}
		}
		changeFlag(num) {
			this.setState({
			selectFlag: num,
		
			});
		}
  		render() {
    	const { model } = this.props;
   		const changeInput = (e) => {
      		if (e.target.value.length === this.countriesFlag[this.state.selectFlag].length) {
       			 this.setState({
       			 });
     		}
    	}
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
							  	<img className="img-responsive" src = {this.countriesFlag[this.state.selectFlag].img}/>
						 	</div>
						  
							<ul className="dropdown-menu">
								{this.countriesFlag.map((item, index) => {
                     				 return <li>
										  		<a>
													<img className="img-responsive" src={item.img}  onClick={() => this.changeFlag(index)} /> 
														{item.pais}
												</a>
											</li>})}
							</ul>
						</div>
					</div>

					<div className="col-lg-2 col-sm-2 col-xs-2">
						<input type="text" value = {this.countriesFlag[this.state.selectFlag].countriesCode} />
					</div>
					<div className="col-sm-7 col-xs-7">
						<input type="number"  placeholder="123456789" onKeyUp={changeInput}/>
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
}

export default SignUp;

