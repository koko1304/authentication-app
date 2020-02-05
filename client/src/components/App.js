import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import requireAuth from "./hoc/requireAuth";

import Header from "./Header";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Feature from "./Feature";

const App = () => {
	return (
		<Router history={history}>
			<Route path="*" component={Header} />
			<div className="container">
				<div className="mt-3">
					<Route path="/" exact component={HomePage} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Route path="/about" component={AboutUs} />
					<Route path="/feature" component={requireAuth(Feature)} />
					<Route path="/contact" component={ContactUs} />
				</div>
			</div>
		</Router>
	);
};

export default App;
