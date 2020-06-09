import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

const Footer = () => {
	return (
		<div className='footer'>
			<Container fluid className='text-center text-md-left'>
				<Row>
					<Col md='6'>
						<h5 className='title'>Footer Content</h5>
						<p>
							Here you can use rows and columns here to organize your footer
							content.
						</p>
					</Col>
					<Col md='6'>
						<h5 className='title'>Social Media</h5>
						<ul className='icon-list'>
							<li className='icon'>
								<a href='https://www.youtube.com/channel/UC0kxfggPvM55GrvrQerhXxQ'>
									<img src={youtube} width={40} />
								</a>
							</li>
							<li className='icon'>
								<a href='facebook.com/nateinyostate'>
									<img src={facebook} width={40} />
								</a>
							</li>
							<li className='icon'>
								<a href='twitter.com/nateinyostate'>
									<img src={twitter} width={40} />
								</a>
							</li>
							<li className='icon'>
								<a href='instagram.com/nateinyostate'>
									<img src={instagram} width={40} />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div className='footer-copyright text-center py-3'>
				<Container fluid>Some content</Container>
			</div>
		</div>
	);
};

export default Footer;
