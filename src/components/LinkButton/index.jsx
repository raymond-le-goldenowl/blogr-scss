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
	classConfig = { default: false, bg: false, border: false }
}) {
	const linkButtonClassName = classNames('link-button', classConfig);

	return (
		<a {...attrs} className={linkButtonClassName}>
			{children}
		</a>
	);
}
