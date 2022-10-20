import React, { useState } from "react";
import logo from "../assets//Altschool logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import FindUser from "./FindUser";

const Navbar = () => {
	const [search, setSearch] = useState(null);
	const [setshowIcon, setsetshowIcon] = useState(true);
	const [showSearch, setshowSearch] = useState(false);
	const [showFindUser, setshowFindUser] = useState(false);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const handleBlur = () => {
		if (!search || search === "") setsetshowIcon(true);
		setshowSearch(false);
	};
	return (
		<div>
			<div className='pr-2 flex items-center text-gray-500 justify-between  my-3'>
				<div className='flex items-center gap-5 '>
					<img src={logo} alt='' />
					<p className={`font-bold text-[14px] ${showSearch && "hidden"}`}>
						Random Users
					</p>
				</div>

				<div className='items-center gap-5 flex'>
					<div
						className='hover:underline cursor-pointer'
						onClick={() => setshowFindUser(true)}>
						Fetch users
					</div>
					<div
						className={`relative ${showSearch ? "block" : "hidden"}  md:block`}>
						<input
							onChange={handleChange}
							onFocus={() => setsetshowIcon(false)}
							onBlur={handleBlur}
							type='search'
							className={`border rounded ${
								setshowIcon ? "px-5" : "px-2"
							} py-1 outline-none `}
							placeholder='search user'
						/>
						{setshowIcon && (
							<HiOutlineSearch className='absolute top-[11px] left-1' />
						)}
					</div>
				</div>
				<div className='mr-3 md:hidden'>
					{!showSearch && (
						<HiOutlineSearch
							className=' h-6  w-6 cursor-pointer'
							onClick={() => setshowSearch(true)}
						/>
					)}
				</div>
			</div>
			{showFindUser && <FindUser setshowFindUser={setshowFindUser} />}
		</div>
	);
};

export default Navbar;
