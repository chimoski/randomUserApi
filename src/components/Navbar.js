import React, { useState } from "react";
import logo from "../assets//Altschool logo.svg";
import FindUser from "./FindUser";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const [showFindUser, setshowFindUser] = useState(false);
	const navigate = useNavigate();
	return (
		<div>
			<div className='pr-2 flex items-center text-gray-500 justify-between  my-3'>
				<div className='flex items-center gap-5 ' onClick={() => navigate("/")}>
					<img src={logo} alt='' className='cursor-pointer' />
					<p className={`font-bold text-[14px] `}>Random Users</p>
				</div>

				<div className='items-center gap-5 flex'>
					<div
						className='underline cursor-pointer text-blue-500 mr-5'
						onClick={() => setshowFindUser(true)}>
						Fetch users
					</div>
				</div>
			</div>
			{showFindUser && <FindUser setshowFindUser={setshowFindUser} />}
		</div>
	);
};

export default Navbar;
