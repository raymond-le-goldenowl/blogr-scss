import React from 'react';

import './styles.scss';

import logoBlogr from 'assets/images/logo.svg';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='logo'>
				<img src={logoBlogr} alt='logo-blogr' />
			</div>

			<div className='footer-nav'>
				<div className='product'>
					<div className='title'>Product</div>
					<ul>
						<li>Overview</li>
						<li>Pricing</li>
						<li>Marketplace</li>
						<li>Features</li>
						<li>Integrations</li>
					</ul>
				</div>
				<div className='company'>
					<div className='title'>Company</div>
					<ul>
						<li>About</li>
						<li>Team</li>
						<li>Blog</li>
						<li>Careers</li>
					</ul>
				</div>
				<div className='connect'>
					<div className='title'>Connect</div>
					<ul>
						<li>Contact</li>
						<li>Newsletter</li>
						<li>LinkedIn</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
