import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className='max-w-[1300px] mx-auto'>
			<nav>
				<Navbar />
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Home;
