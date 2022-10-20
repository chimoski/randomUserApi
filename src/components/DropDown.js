import React, { useRef, useState } from "react";
import { useClickOutsideClose } from "../Hooks/useClickOtside";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDown = ({ selected, setSelected, array }) => {
	const [openDrop, setOpenDrop] = useState(false);
	const dropDownRef = useRef(null);
	useClickOutsideClose(dropDownRef, () => setOpenDrop(false));
	return (
		<div className='relative' ref={dropDownRef}>
			<div>
				<div
					onClick={() => setOpenDrop((prev) => !prev)}
					className={`border border-gray-400 outline-none flex justify-between items-center gap-3  rounded-[10px] ${
						openDrop ? "rounded-b-none" : openDrop && "rounded-t-none"
					} p-2  "w-[90%]"
					} cursor-pointer relative text-gray-900 font-semibold`}>
					{selected}
					<IoMdArrowDropdown
						className={` transition-all h-6 w-6 ${
							openDrop && " rotate-180 z-50"
						}`}
					/>
				</div>
			</div>
			{openDrop && (
				<div
					className={`border bg-white absolute shadow-sm w-[100%] top-[40px] left-0 
						"translate-y-[-115px]"
					 z-20`}>
					{array.map((item, i) => (
						<h2
							key={i}
							onClick={() => {
								setSelected(item);
								setOpenDrop(false);
							}}
							className='cursor-pointer border-b p-2 z-10 text-[14px]'>
							{item}
						</h2>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDown;
