import React, {Component} from 'react';
import {
	NavLink
} from 'react-router-dom';
import './Code.css';
 
class HeaderApp extends Component{
  render(){return(
    <header>
      <div className="btnVolver">
        <NavLink to="/signup">
          <i className="material-icons volver">keyboard_arrow_left</i>
        </NavLink>
      </div>
      <h1 className="text-center">Sign Up</h1>
      <h4 className="text-center">Join Now for free ride credit.</h4>
      <hr/>
    </header>);
  }
}
class Code extends Component{
  constructor(props){
    super(props);
    this.inputValue = undefined;
    this.userCode = undefined;
    this.createdCode = [];
    this.state = {
      codeLab : [],
      validate : false,
      toShow: false
    }
  }
  generateCode(array){
    let values = Math.floor((Math.random()*333)+111);
    if (!array.some(function (e) {
            return e === values
        })) {
        array.push(values);
    }
  }
  createCode(){
      this.generateCode(this.createdCode);
      this.setState({
      codeLab : this.createdCode
    })
  }
  toShow(e){
    this.setState({
      toShow: true
    });
    this.createCode();
  }
  changeInput(e){
    let currentInput = this.state.codeLab.toString().replace(/,/g, "");
    if(e.target.value === currentInput){
      this.setState({
        validate : true
      });
    } else {
      this.setState({
        validate : false 
      });
    } 
  }
  validateCode(input){
    this.userCode = input;
  }

  render(){
    return(
      <div className="text-center">
      <HeaderApp/>
      {this.state.toShow &&
      <div>
        <div>
          <h4 >Your code is:</h4>
          <h5><strong>LAB-{this.state.codeLab}</strong></h5>
        </div>
        <form onSubmit={(e) => {e.preventDefault();this.validateCode(this.inputValue);}}>
            <strong>LAB-</strong>
            <input type="number" 
                 value={this.inputValue} 
                 onChange={(e) => {this.changeInput(e)}}/>
        {

            this.state.validate ? 
            <NavLink 
                  to = "/signup-form"    
                 className="btn btn-lyft btn-lg btn-block" 
                 >
                 Next
              </NavLink>
                :
            <button 
                 className="btn btn-lg btn-block btn-lyft disabled" 
                 >
                 Next
          </button>

        }
        </form>
      </div>
      }
      {!this.state.toShow && 
        <div>
          <button className="btn btn-lyft btn-lg btn-block" onClick={(e) => {this.toShow(e)}}>Get Code</button>
        </div> 
      }  
      </div>
    );
  }
}
    export default Code;