import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

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

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

const Home = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
