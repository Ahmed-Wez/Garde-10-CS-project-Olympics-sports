import React from 'react';

function Profile(props) {
	const title = props.title || "profile";

	return (
		<svg height="19" width="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#333" stroke="#333" strokeWidth="1">
		<path d="M15,15H9 c-3.314,0-6,2.686-6,6v1c0,0,3.125,1,9,1s9-1,9-1v-1C21,17.686,18.314,15,15,15z" fill="none" stroke="#333" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10"/>
		<path d="M7,6c0-2.761,2.239-5,5-5 s5,2.239,5,5s-2.239,6-5,6S7,8.761,7,6z" fill="none" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10"/>
	</g>
</svg>
	);
};

export default Profile;