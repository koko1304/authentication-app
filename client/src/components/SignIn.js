import React from "react";
import { connect } from "react-redux";

import signin from "../actions/signin";
import AuthForm from "./AuthForm";

const SignIn = props => {
	return (
		<React.Fragment>
			<h1 className="h2">Log In</h1>
			<AuthForm submitBtnName="Log In" onSubmit={formValues => props.signin(formValues)} />
		</React.Fragment>
	);
};

export default connect(null, { signin })(SignIn);
