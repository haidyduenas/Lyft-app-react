import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import './mapa.css';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
 import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


const LyftMap = ({model}) => {

	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: [],
		isFiltering: false,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		//this.setState({
		//	activeProperty: property,
		//});
		model.setActiveProperty(property);

		const {index} = property;

		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
			//jump(target, {
			//	duration: 800,
			//	easing: easeInOutCubic,
			//});
		}
	}
	const onPathBntClick = () => {
		model.setIsRouting();
	}

	return (<div>
		<header>
			<div className="container">
				<div className="row">
					<div className="col-md-12 cabish">
						<div className="col-md-4 imggeneral">
							<img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" className="img-circle" width="50" />
						</div>
						<div className="col-md-4 imggeneral">
							<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" width="50"/>
						</div>
						<div className="col-md-4 imggeneral">
							<img src="https://cdn2.iconfinder.com/data/icons/e-commerce-glyph-2/614/19_-_Gift-512.png" className="img-circle" width="50"/>
						</div>
					</div>		
				</div>
			</div>
		</header>
		<div className="col-md-3 col-sm-3">
			<div className="form-group">
				<label htmlFor="destino"> Destino </label>
				<ReactGoogleAutocomplete
					onPlaceSelected={(place) => {

						console.log (place);
						model.setTarget (place);

					}}
					componentRestrictions={{country: "pe"}}
				/>
			</div>
		</div>
		<div className="col-md-3 col-sm-3">
			<button id="ruta" className="btn btn-success" onClick={onPathBntClick}>
				<i className="fa fa-bicycle" aria-hidden="true"></i>
				Ruta
			</button>
		</div>
		<GoogleMaps
			model = {model}
			properties={properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>


	</div>);
}


export default LyftMap;

{/* <header>
<div className="container">
	<div className="row">
		<div className="col-md-12 cabish">
			<div className="col-md-4 imggeneral">
				<img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" className="img-circle" width="50" />
			</div>
			<div className="col-md-4 imggeneral">
				<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" width="50"/>
			</div>
			<div className="col-md-4 imggeneral">
				<img src="https://cdn2.iconfinder.com/data/icons/e-commerce-glyph-2/614/19_-_Gift-512.png" className="img-circle" width="50"/>
			</div>
		</div>		
	</div>
</div>
</header> */}