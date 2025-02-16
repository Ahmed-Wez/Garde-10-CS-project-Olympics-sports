import React from 'react';

function Zoom(props) {
	const title = props.title || "zoom";

	return (
		<svg height="19" width="19" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#333" stroke="#333" strokeWidth="2.5">
		<line fill="none" strokeLinecap="square" strokeMiterlimit="10" x1="59" x2="42.556" y1="59" y2="42.556"/>
		<circle cx="27" cy="27" fill="none" r="22" stroke="#333" strokeLinecap="square" strokeMiterlimit="10"/>
	</g>
</svg>
	);
};

export default Zoom;