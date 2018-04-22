import React from 'react';

export default function Displaying(props) {

	return (
		<div>{props.value || props.result}</div>
	);
}
