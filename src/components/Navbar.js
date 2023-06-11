import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<Fade direction='left' delay='60'>
				<div className='logo'>
					<span className='logo-text'>Prime Advisors</span>
				</div>
			</Fade>
			<div className='navlinks'>
				<ul className='links'>
					<Zoom direction='in' delay='40'>
						<li className='link'>Home</li>
					</Zoom>
					<Zoom direction='in' delay='40'>
						<li className='link'>Our Services</li>
					</Zoom>
					<Zoom direction='in' delay='40'>
						<li className='link'>FAQ</li>
					</Zoom>
					<Zoom direction='in' delay='40'>
						<li className='link'>Contact Us</li>
					</Zoom>
				</ul>
			</div>
			<div className='call-button'>
				<Fade direction='right' delay='60'>
					<button>Call now</button>
				</Fade>
			</div>
		</div>
	);
};

export default Navbar;
