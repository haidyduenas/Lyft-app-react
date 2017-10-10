import React, {Component} from 'react';
import './mapa.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


//import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const LyftMap = ({model}) => {
	return (
		<div className="container-fluid">
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-12 cabish">
							<div className="col-md-4 imggeneral">
								<img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" className="img-circle" width="50" />
							</div>
							<div className="col-md-4 imggeneral">
								<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" className="img-circle" alt="logo" width="50"/>
							</div>
							<div className="col-md-4 imggeneral">
								<img src="https://cdn2.iconfinder.com/data/icons/e-commerce-glyph-2/614/19_-_Gift-512.png" className="img-circle" alt="logo" width="50"/>
							</div>
						</div>		
					</div>
				</div>
			</header>
			<div className="container" id="container-map">
				<div className="row">
					<div className="col-md-12 col-sm-12">
							nuestro mapa
					</div>
				</div>
			</div>	
		</div>
			 
		);	 					
}


export default LyftMap;