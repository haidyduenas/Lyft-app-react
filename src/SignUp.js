import React, {Component} from 'react';
import './App.css';
import {
	NavLink
} from 'react-router-dom'


class HeaderApp extends Component{
	render(){
	return(
	  <header>
		<div className="btnVolver">
		  <NavLink to="/home">
			<i className="material-icons volver">keyboard_arrow_left</i>
		  </NavLink>
		</div>
		<h1 className="text-center">Sign Up</h1>
		<h4 className="text-center">Join Now for free ride credit.</h4>
		<hr/>
	  </header>);
	}
  }

  class ButtonValidator extends Component {
	render(){
		return(
			<div className="next">
				<NavLink to={"/code"}
			  		className="btn btn-lyft btn-lg btn-block">
			  		Next
		  		</NavLink>
	   		</div>
		)
	}
}

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
				if (e.target.value.numbers === this.countriesFlag[this.state.selectFlag].numbers) {
					  this.setState({
					  });
			   }
		  }
		  return (
				<div>
				  	<HeaderApp/>
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
										return <li key={index}>
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
				<ButtonValidator/>
			   	</div>  
	  );
	}
  }







export default SignUp;

