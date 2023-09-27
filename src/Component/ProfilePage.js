import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const userData = useSelector((state) => state.user.value);
	const themeOfText = useSelector((state) => state.theme.value);
	return (
		<div style={{ alignContent: "center", color: themeOfText }}>
			<h2>Profile Page</h2>
			<p>Name:{userData.name}</p>
			<p>Age:{userData.age}</p>
			<p>Email:{userData.email}</p>
		</div>
	);
};

export default ProfilePage;
