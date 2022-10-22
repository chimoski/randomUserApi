import { useEffect, useState } from "react";
export const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const fetchUrl = async () => {
		try {
			setLoading(true);
			const response = await fetch(url);
			const _data = await response.json();
			setData(_data.results);
		} catch (error) {
			if (error.name === "AbortError") {
				setError("Fetch aborted");
			}

			if (error.name === "SyntaxError") {
				setError("Invalid JSON");
			}
			if (error.name === "ReferenceError") {
				setError("Invalid data");
			} else {
				setError(error.message);
			}
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchUrl();
	}, []);
	return { loading, data, error };
};
