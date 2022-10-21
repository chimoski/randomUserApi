import React, { memo, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import UserCard from "../components/UserCard";
import { useFetch } from "../Hooks/useFetchUrl";
const Users = () => {
	const { no } = useParams();
	const { loading, data, error } = useFetch(
		`https://randomuser.me/api/?gender=male&results=${no}&seed=abc}`
	);

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const usersPerPage = 8;
	const currIndex = (page - 1) * usersPerPage;
	const users = data.slice(currIndex, page * usersPerPage);

	useEffect(() => {
		setTotalPages(Math.ceil(data?.length / usersPerPage));
	}, [data]);
	return (
		<div>
			{totalPages > 1 && (
				<div className='pb-8'>
					{page} of {totalPages}
				</div>
			)}
			{loading ? (
				<Loader />
			) : error ? (
				<h1>{error}</h1>
			) : (
				<div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
					{users?.map((item) => (
						<div key={item.login.uuid} className='flex'>
							<UserCard {...item} item={item} />
						</div>
					))}
				</div>
			)}
			{totalPages > 1 && (
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			)}
		</div>
	);
};

export default memo(Users);
