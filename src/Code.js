import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './App.css';


const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor((Math.random()*333)+111);
  alert(numero_aleatorio);
}

const Code = () => {
   return (
    <div>
		<header className="text-center">
			<div className="col-md-2 col-sm-2 col-xs-2">
			   	<div className="back-page1 text-center">
			   		<ul>
				   		<li className="btn btn-default btn-lg active init"><NavLink className="btn btn-default btn-lg active init" to="/signup">Sing Up</NavLink ></li>
			   		</ul>
			   	</div>
		   	</div>
			<h1>This is Your Code</h1>
			<h4>Copy this code and enter it in the next Section</h4>
			<hr/>
		</header>
	  
		<section className = "codigo">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">  
                        <span>LAB-235</span>
                        <span id="imprimir-codigo">{geraNumeroAleatorio}</span><hr/><hr/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                         <p><span className="lab">LAB-</span>    
                            <input id="codigo-input" type="number" placeholder="XXX" readonly/>
                         </p>    
                     </div>
                 </div>
            </div>

            <div className="col-xs-12 col-sm-12 text-center">
                <NavLink to={"/signup-form"}className="btn btn-lyft btn-lg btn-block">
					 Next
				</NavLink>
            </div>
	  	</section>
    </div>
    );
}
    export default Code;