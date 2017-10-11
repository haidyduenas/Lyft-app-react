import React, {Component} from 'react';
import {
	NavLink
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
                            <input id="codigo-input" type="number" placeholder="XXX" readOnly/>
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