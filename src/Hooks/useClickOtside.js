import React, { useEffect } from "react";

export const useClickOutsideClose = (ref, func) => {
	useEffect(() => {
		const handleClick = (e) => {
			if (!ref.current || ref.current.contains(e.target)) return;
			else func();
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	});

	return { ref, func };
};
