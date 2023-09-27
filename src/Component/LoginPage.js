import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducer/user";
const LoginPage = () => {
	const dispatch = useDispatch();
	return (
		<div style={{ alignItems: "center" }}>
			<button
				onClick={() =>
					dispatch(login({ name: "asa", age: 10, email: "asdas" }))
				}>
				Login
			</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};

export default LoginPage;
