import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Component/LoginPage";
import ProfilePage from "./Component/ProfilePage";
import ChangeColor from "./Component/ChangeColor";

function App() {
	return (
		<div className="App">
			<ProfilePage /> <LoginPage />
			<ChangeColor />
		</div>
	);
}

export default App;
