/*global google*/
import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
import nate from '../images/nate-icon.png';

const Map = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
		>
			<Marker position={{ lat: 40.73061, lng: -73.935242 }} icon={nate} />
			<Marker position={{ lat: 39.952583, lng: -75.165222 }} icon={nate} />
			<Marker position={{ lat: 41.03594, lng: -71.95451 }} icon={nate} />
		</GoogleMap>
	))
);

export default Map;
