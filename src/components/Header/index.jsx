import React, { useState } from 'react';

import './styles.scss';

import iconHamburger from 'assets/images/icon-hamburger.svg';
import iconClose from 'assets/images/icon-close.svg';

import iconArrowDark from 'assets/images/icon-arrow-dark.svg';
import LinkButton from 'components/LinkButton';

export default function Header() {
	const [isHamburgerChecked, setIsHamburgerChecked] = useState(false);
	const [isConnectChecked, setIsConnectChecked] = useState(false);
	return (
		<header className='header'>
			<div className='header--top'>
				<div className='logo'>Blogr</div>
				<nav className='menu'>
					{/* toggle icon navigate */}
					<div className='toggle-icon'>
						<label>
							<input
								type='checkbox'
								onChange={e => setIsHamburgerChecked(e.target.checked)}
							/>
							<img
								src={isHamburgerChecked ? iconClose : iconHamburger}
								alt='toggle-icon'
								className='icon-hamburger'
							/>
						</label>
					</div>

					{/* navigate links */}
					<ul
						className='links'
						style={
							isHamburgerChecked
								? { transform: 'translateY(0px)', transition: 'all .5s' }
								: { transform: 'translateY(-600px)', transition: 'all .5s' }
						}
					>
						<li className='item'>
							<label>
								<span className='link'>Product</span>
								<input type='checkbox' />
								<img src={iconArrowDark} alt='arrow-icon' />
							</label>
						</li>
						<li className='item'>
							<label>
								<span className='link'>Company</span>
								<input type='checkbox' />
								<img src={iconArrowDark} alt='arrow-icon' />
							</label>
						</li>
						<li className='item'>
							<label>
								<span className='link'>Connect</span>
								<input
									type='checkbox'
									onChange={({ target }) => setIsConnectChecked(target.checked)}
								/>
								<img src={iconArrowDark} alt='arrow-icon' />
							</label>
							{/* Submenu - Contact */}
							<ul
								className='sub-menu'
								style={isConnectChecked ? {} : { display: 'none' }}
							>
								<li>
									<a href='#!'>Contact</a>
								</li>

								<li>
									<a href='#!'>Newsletter</a>
								</li>
								<li>
									<a href='#!'>LinkedIn</a>
								</li>
							</ul>
						</li>
						<li className='break-item'></li>
						<li className='item'>
							<a href='#!' className='link'>
								Login
							</a>
						</li>
						<li className='item'>
							<LinkButton
								attrs={{ href: '#!sign-up' }}
								classConfig={{ default: true, bg: true, border: false }}
							>
								Sign Up
							</LinkButton>
						</li>
					</ul>
				</nav>
			</div>

			{/* Banner */}

			<div className='banner'>
				<h1 className='title'>A modern publishing platform</h1>

				<p className='tiny-caption'>
					Grow your audience and build your online brand
				</p>
				<div className='vertical-buttons'>
					<LinkButton
						attrs={{ href: '#!' }}
						classConfig={{
							default: true,
							bg: true,
							bgColor: '#fff',
							border: false
						}}
					>
						Start for Free
					</LinkButton>
					<LinkButton classConfig={{ default: true, bg: false, border: true }}>
						Learn More
					</LinkButton>
				</div>
			</div>
		</header>
	);
}
