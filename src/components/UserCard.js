import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
const UserCard = ({ name, picture, email, gender, phone, item }) => {
	const { first, last } = name;
	const { thumbnail } = picture;

	const genderIcon = gender === "male" ? <CgGenderMale /> : <CgGenderFemale />;
	return (
		<div className='bg-white w-[300px] mb-8 mx-auto shadow-md  rounded pb-3'>
			<img
				src={thumbnail}
				alt=''
				className='rounded-full mx-auto -mt-8 bg-[rgba(255,255,255,0.4)] p-2'
			/>
			<h1 className='font-bold text-center text-gray-700'>{`${first} ${last}`}</h1>
			<div className='flex justify-center items-center gap-1 text-center font-semibold text-[14px] text-gray-500'>
				<MdOutlineMail />
				<h2>{email}</h2>
			</div>
			<div className='flex justify-center items-center gap-1 text-center font-semibold text-[14px] text-gray-500'>
				{genderIcon}
				<h2>{gender}</h2>
			</div>
			<div className='flex pb-2 justify-center items-center gap-1 text-center font-semibold text-[14px] text-gray-500'>
				<BiPhone />
				<h2>{phone}</h2>
			</div>

			<Link
				to={`/user/${item.login.uuid}`}
				state={item}
				className='bg-[#07074d] text-white font-semibold px-2 ml-[110px] shadow-lg rounded '>
				View user
			</Link>
		</div>
	);
};

export default UserCard;
