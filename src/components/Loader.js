import React from "react";
import loader from "../assets/Spinner-1s-200px.svg";

const Loader = () => {
	return (
		<div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full'>
			<div className='flex justify-center align-middle'>
				<img src={loader} alt='' />
			</div>
		</div>
	);
};

export default Loader;
