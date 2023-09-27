import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { store } from "./store";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/theme";
import userReducer from "./reducer/user";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
	reducer: { user: userReducer, theme: themeReducer },
});

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
