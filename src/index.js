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

console.log("ok!")

function App() {
	return (
		<Router>
			<h1>titolo</h1>
			<Switch>
				<Route path="/vinyls/:id" component={VinylDetails} />
				<Route path="/vinyls">
					<VinylsList></VinylsList>
				</Route>
				<Route path="/authors">
					autori
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