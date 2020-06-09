import React from 'react';
import logo from '../logo.svg';
import nate from '../images/nate.png';
import './Home.css';

const Home = () => {
	return (
		<div className='App'>
			<div className='cover'>
				<img src={nate} className='App-logo' alt='logo' />
			</div>
			<header className='App-header'>
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

export default Home;
