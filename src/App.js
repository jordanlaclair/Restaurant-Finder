import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpdatePage from "./routes/UpdatePage";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				{/* The Switch is so if we find our route, we stop there */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/restaurants/:id/update" component={UpdatePage} />
					<Route exact path="/restaurants/:id" component={Details} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
