import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

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
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

function Users() {
	return <h2>Users</h2>;
}

export default App;
