import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
	const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);
	return (
		<div className='flex justify-between px-5 md:px-0 mb-5 md:mb-0'>
			<button
				className={`rounded w-[40px] h-[30px] text-center bg-blue-500 text-white px-2 py-1 ${
					page === 1 && "bg-gray-500"
				}`}
				disabled={page === 1}
				onClick={() => setPage(page - 1)}>
				prev
			</button>
			<div className='flex flex-wrap px-2 gap-2  justify-between'>
				{pageNumber.map((item) => (
					<button
						key={item}
						onClick={() => setPage(item)}
						className={` rounded bg-gray-500 text-[12px] justify-center flex items-center w-[20px] h-[20px] text-white px-1 py-1  ${
							page === item && "active"
						}`}>
						{item}
					</button>
				))}
			</div>
			<button
				className={`rounded  h-[30px] w-[40px] bg-blue-500 text-white px-2 py-1 ${
					page === totalPages && "bg-gray-500"
				}`}
				disabled={page === totalPages}
				onClick={() => setPage(page + 1)}>
				next
			</button>
		</div>
	);
};

export default Pagination;
