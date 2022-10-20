import React from "react";
import { useLocation } from "react-router-dom";

const User = () => {
	const { state } = useLocation();
	return (
		<div>
			<h1>{state?.name?.first}</h1>
		</div>
	);
};

export default User;
