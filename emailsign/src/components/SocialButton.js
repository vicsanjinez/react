import React from 'react';

const onClickEvento = (url) => location = url;
//buldles
//es doble llave en button porque es un json
const SocialButton = (props) => (
	<button style={{backgroundColor: props.backgroundColor, 
		border:'none', 
		color: props.textColor}}
		onClick={onClickEvento.bind(this, props.url)}
		>
		{props.children}
	</button>
	);

export default SocialButton;