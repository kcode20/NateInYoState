import React from 'react';
import { Row, Col } from 'react-bootstrap';
import nate from '../images/nate.png';
import './Home.css';

const Home = () => {
	return (
		<div className='App'>
			<div className='cover'>
				<Row>
					<Col>
						<h1>Nate In Yo' State</h1>
					</Col>
					<Col>
						<img src={nate} className='App-logo' alt='logo' />
					</Col>
				</Row>
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
