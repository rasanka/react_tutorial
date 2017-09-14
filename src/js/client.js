import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// Lesson #04 Completed

/*
class Layout extends React.Component {

	constructor() {
		super();
		this.name = "Dilini";
	}

	getVal() {
		return "Yippi"
	}

	render() {
		var val = 1;
		return (
			<div>
				<h1>Rasa...{3+2} Its working fine {val}!</h1>
				<h1>Rasa... Its working fine {this.getVal()}</h1>
				<h1>{this.name}</h1>
			</div>
		);
	}
}
*/

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
