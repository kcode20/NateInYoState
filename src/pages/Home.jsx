import React from 'react';
import { Row, Col } from 'react-bootstrap';

import About from './About.jsx';
import nate from '../images/nate.png';
import './Home.css';

const Home = () => {
	return (
		<div className='App'>
			<div className='cover'>
				<Row>
					<Col sm={8}>
						<div className='vertical-center'>
							<h1>Nate In Yo' State</h1>
							<p className='header-text'>Food, Travel, and Lifestyle</p>
						</div>
					</Col>
					<Col xs lg='2'>
						<div className='vertical-center'>
							<img src={nate} className='App-logo' alt='logo' />
						</div>
					</Col>
				</Row>
			</div>
			<header className='App-header'>
				<About />
			</header>
		</div>
	);
};

export default Home;
