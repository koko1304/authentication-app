import React from "react";
import { connect } from "react-redux";

import signup from "../actions/signup";
import AuthForm from "./AuthForm";

const SignUp = props => {
	return (
		<React.Fragment>
			<h1 className="h2">Create An Account</h1>
			<AuthForm submitBtnName="Create" onSubmit={formValues => props.signup(formValues)} />
		</React.Fragment>
	);
};

export default connect(null, { signup })(SignUp);
