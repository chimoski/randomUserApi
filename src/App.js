import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import User from "./pages/User";
import Users from "./pages/Users";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='*' element={<ErrorPage />} />
					<Route path='/' element={<Home />}>
						<Route index element={<Featured />} />
						<Route path='users' element={<Users />} />
					</Route>
					<Route path='/user/:id' element={<User />} />
				</Routes>
			</Router>
		</div>
	);
}
export default App;
// element={<Navigate to='/login' />}
