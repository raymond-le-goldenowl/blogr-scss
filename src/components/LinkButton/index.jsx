import React from 'react';

export default function LinkButton({ children, attrs, className }) {
	return (
		<a {...attrs} className={`link-btn ${className}`}>
			{children}
		</a>
	);
}
