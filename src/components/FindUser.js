import React, { useState } from "react";
import DropDown from "./DropDown";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FindUser = ({ setshowFindUser }) => {
	// const [selected, setSelected] = useState("Select");
	const [noUsers, setNoOfUsers] = useState(1);
	const navigate = useNavigate();
	const handleClick = () => {
		if (noUsers < 1 || noUsers > 200 || noUsers === "" || isNaN(noUsers)) {
			alert("Please enter a number between 1 and 200");
			return;
		} else {
			navigate(`users/${noUsers}`);
			setshowFindUser(false);
			window.location.reload();
		}
	};
	return (
		<div className='absolute w-full left-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)]'>
			<div className='flex align-middle justify-center mt-[100px]'>
				<div className=' bg-white pb-4 px-4 py-8  shadow-lg  relative'>
					<IoClose
						className='absolute top-2 right-2 cursor-pointer h-6 w-6'
						onClick={() => setshowFindUser(false)}
					/>
					<div className='flex  gap-5 my-5'>
						<p className='font-bold'>NO of users:</p>
						<input
							type='number'
							value={noUsers}
							onChange={(e) => setNoOfUsers(e.target.value)}
							min={1}
							max={500}
							className='w-[80px] border'
						/>
					</div>
					{/* <div className='flex gap-5 items-center mt-5  pb-6'>
						<p className='text-lg font-bold'>Gender:</p>
						<DropDown
							selected={selected}
							setSelected={setSelected}
							array={["Male", "Female", "All"]}
						/>
					</div> */}
					<button
						className='bg-black text-white rounded px-2  ml-12 '
						onClick={handleClick}>
						Fetch users
					</button>
				</div>
			</div>
		</div>
	);
};
export default FindUser;
