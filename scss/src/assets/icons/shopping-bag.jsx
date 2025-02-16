import React from 'react';

function ShoppingBag(props) {
	const title = props.title || "shopping bag";

	return (
		<svg height="19" width="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#333" stroke="#333" strokeWidth="1">
		<path d="M19.734,23H4.266a2,2,0,0,1-1.985-2.248L4,7H20l1.719,13.752A2,2,0,0,1,19.734,23Z" fill="none" stroke="#333" strokeLinecap="square" strokeMiterlimit="10"/>
		<path d="M8,10V5a4.013,4.013,0,0,1,4-4h0a4.013,4.013,0,0,1,4,4v5" fill="none" strokeLinecap="square" strokeMiterlimit="10"/>
	</g>
</svg>
	);
};

export default ShoppingBag;