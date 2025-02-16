import React from 'react';

function Bookmark(props) {
	const title = props.title || "bookmark";

	return (
		<svg height="15" width="15" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#333333" strokeWidth="0.5">
		<path d="M1.5,11.5,6,8.5l4.5,3V1.5a1,1,0,0,0-1-1h-7a1,1,0,0,0-1,1Z" fill="none" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
	</g>
</svg>
	);
};

export default Bookmark;