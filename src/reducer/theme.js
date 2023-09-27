import { createSlice } from "@reduxjs/toolkit";

const initialColor = "";

const themeColor = createSlice({
	name: "themeColor",
	initialState: { value: initialColor },
	reducers: {
		themeColorReducer: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { themeColorReducer } = themeColor.actions;
export default themeColor.reducer;
