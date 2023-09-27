import React from "react";
import { useDispatch } from "react-redux";
import { themeColorReducer } from "../reducer/theme";
import { useState } from "react";

const ChangeColor = () => {
	const dispatch = useDispatch();
	const [color, setcolor] = useState("");
	return (
		<div>
			<input type="text" onChange={(obj) => setcolor(obj.target.value)}></input>
			<button
				onClick={() => {
					dispatch(themeColorReducer(color));
				}}>
				Change Color
			</button>
		</div>
	);
};

export default ChangeColor;
