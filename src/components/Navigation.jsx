import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import nate from '../images/nate.png';
import nateInYoState from '../images/nate-in-yo-state.png';

const Navigation = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='/'>
				<img src={nate} style={{ paddingRight: '15px' }} height={50} />
				<img src={nateInYoState} height={50} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/about'>About</Nav.Link>
					<Nav.Link href='/map'>Map</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
