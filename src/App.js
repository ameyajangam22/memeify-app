import "./App.css";
import Main from "./pages/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
function App() {
	return (
		<div className="App pattern">
			<Router>
				<Switch>
					<Route exact path="/" component={Main}></Route>
					<Route exact path="/about-us" component={AboutUs}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
