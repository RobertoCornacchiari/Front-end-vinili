import React from "react"
import ReactDOM from "react-dom"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import { VinylsList } from "./VinylsList"
import { VinylDetails } from "./VinylDetails"
import { AuthorsList} from "./AuthorsList";
import { GenresList} from "./GenresList";

console.log("ok!")

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/vinyls/:id" component={VinylDetails} />
				<Route path="/vinyls">
					<h2>Ecco i vinili presenti nella collezione: </h2>
					<VinylsList></VinylsList>
				</Route>
				<Route path="/authors">
					<h2>Autori</h2>
					<AuthorsList/>
				</Route>
				<Route path="/genres">
					<h2>Generi</h2>
					<GenresList/>
				</Route>
				<Route path="/">
					home
				</Route>
			</Switch>
		</Router>
	)
}

var rootNode = document.getElementById("app")
ReactDOM.render(<App />, rootNode)