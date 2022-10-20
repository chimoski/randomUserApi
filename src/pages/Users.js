import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { useFetch } from "../Hooks/useFetchUrl";
const Users = () => {
	// const { state } = useLocation();

	const { loading, data, error } = useFetch(
		"https://randomuser.me/api/?results=50&seed=abc"
	);

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const usersPerPage = 5;
	const currIndex = (page - 1) * usersPerPage;
	const fetchFrom = data.slice(currIndex, page * usersPerPage);
	useEffect(() => {
		setTotalPages(Math.ceil(data?.length / usersPerPage));
	}, [data]);
	return (
		<div>
			<div>
				{page} of {totalPages}
			</div>
			{loading ? (
				<Loader />
			) : error ? (
				<h1>{error}</h1>
			) : (
				fetchFrom?.map((item) => (
					<Link
						// to={`/user/${item.login.uuid}`}
						state={item}
						key={item.login.uuid}>
						<h1>{item.name.first}</h1>
					</Link>
				))
			)}
			<Pagination page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};

export default memo(Users);
