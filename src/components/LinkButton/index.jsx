import React from 'react';

import classNames from 'classnames';

import './styles.scss';

/**
 *
 * @param {Component} children
 * @param {Attributes} attrs
 * @param {Object} classConfig {bg: false, border: false}
 */
export default function LinkButton({
	children,
	attrs = { href: '#!' },
	classConfig = { default: false, bg: false, border: false },
	bgColor = null,
	color = null
}) {
	const linkButtonClassName = classNames('link-button', classConfig);
	console.log(bgColor);
	return (
		<a
			{...attrs}
			className={linkButtonClassName}
			style={
				bgColor !== null
					? {
							background: bgColor,
							color: color
					  }
					: {}
			}
		>
			{children}
		</a>
	);
}
