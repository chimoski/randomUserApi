import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
	const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);
	return (
		<div>
			<button disabled={page === 1} onClick={() => setPage(page - 1)}>
				prev
			</button>
			{pageNumber.map((item) => (
				<button
					key={item}
					onClick={() => setPage(item)}
					className={`${page === item && "active"}`}>
					{item}
				</button>
			))}
			<button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
				next
			</button>
		</div>
	);
};

export default Pagination;
