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
					Finish adding <code>code</code> for the Home page.
				</p>
			</header>
		</div>
	);
};

export default Home;
