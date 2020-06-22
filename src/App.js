import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Map from './components/Map';

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/map'>
						<Map
							googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `100vh` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
