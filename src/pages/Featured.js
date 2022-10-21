import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import { useFetch } from "../Hooks/useFetchUrl";

const Featured = () => {
	const { loading, data, error } = useFetch(
		"https://randomuser.me/api/?results=6"
	);
	// console.log(data);
	return (
		<div>
			<h1 className='text-center font-bold text-2xl text-gray-700 '>
				Featured random Users
			</h1>
			<div className='svgBg  h-[300px] my-5'></div>
			<div className='px-5 -mt-[250px] md:grid grid-cols-3 flex flex-col gap-3  '>
				{loading ? (
					<Loader />
				) : error ? (
					<h1>{error}</h1>
				) : (
					data?.map((item) => (
						<div key={item.login.uuid}>
							<UserCard {...item} item={item} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Featured;
