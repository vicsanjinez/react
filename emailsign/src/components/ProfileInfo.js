import React from 'react';

//buldles
const ProfileInfo = (props) => (
	<div>
		<h2>{props.profesion}</h2>
		<a href={props.url}>{props.empresa}</a>
	</div>

	);

export default ProfileInfo;