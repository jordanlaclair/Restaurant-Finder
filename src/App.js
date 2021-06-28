import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpdatePage from "./routes/UpdatePage";
import Home from "./routes/Home";
import Details from "./routes/Details";
import RestaurantContextProvider from "./context/RestaurantContext";

function App() {
	return (
		<div className="App ">
			<RestaurantContextProvider>
				<BrowserRouter>
					{/* The Switch is so if we find our route, we stop there */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/restaurants/:id/update"
							component={UpdatePage}
						/>
						<Route exact path="/restaurants/:id" component={Details} />
					</Switch>
				</BrowserRouter>
			</RestaurantContextProvider>
		</div>
	);
}

export default App;
