import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoLocation } from "react-icons/go";

const User = () => {
	const { state } = useLocation();
	const [isClicked, setIsClicked] = useState("About");
	const {
		gender,
		name: { first, last, title },
		location: { city, country },
		email,
		phone,
		login: { username },
		picture: { large },
		registered: { age },
		cell,
	} = state;

	return (
		<div className='px-2 md:px-0 md:grid grid-cols-4  mx-auto gap-10'>
			<div>
				<img src={large} alt='' className='h-[200px] mx-auto md:mx-0' />
			</div>
			<div className=''>
				<p className='text-center md:text-left font-bold '>{`${title} ${first} ${last}`}</p>
				<div className='flex items-center gap-2 text-gray-500 justify-center md:justify-start'>
					<GoLocation />
					<p>{country}</p>
				</div>
				<div className='flex gap-5 mt-12 mb-5 font-bold  ml-2 md:ml-0'>
					<h1
						className={` cursor-pointer ${
							isClicked === "About" && "border-b-[5px] border-blue-500"
						}`}
						onClick={() => setIsClicked("About")}>
						About
					</h1>
					<h1
						className={` cursor-pointer ${
							isClicked === "Contact" && "border-b-[5px] border-blue-500"
						}`}
						onClick={() => setIsClicked("Contact")}>
						Contact
					</h1>
				</div>

				<div className='ml-2 md:ml-0'>
					{isClicked === "About" && (
						<About
							Username={username}
							Gender={gender}
							City={city}
							Country={country}
							Age={age}
							State={state.location.state}
						/>
					)}
					{isClicked === "Contact" && (
						<Contact phone={phone} email={email} cell={cell} />
					)}
				</div>
			</div>
		</div>
	);
};

export default User;

const About = ({ Username, Gender, City, Country, Age, State }) => {
	const about = { Username, Gender, City, Country, Age, State };

	return (
		<div>
			{Object.entries(about).map((key, value) => {
				return (
					<div
						key={value}
						className='mb-2 grid grid-cols-2  justify-start gap-3'>
						<h2 className='font-bold'>{key[0]}:</h2>
						<p>{key[1]}</p>
					</div>
				);
			})}
		</div>
	);
};

const Contact = ({ phone, email, cell }) => {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex  items-center gap-5 justify-start'>
				<h2 className='font-bold'>Phone:</h2>
				<p>{phone}</p>
			</div>
			<div className='flex  items-center gap-5 justify-start'>
				<h2 className='font-bold'>CellNo:</h2>
				<p>{cell}</p>
			</div>
			<div className='flex  items-center gap-5 justify-start'>
				<h2 className='font-bold'>Email :</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};
