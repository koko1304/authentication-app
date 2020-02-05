import React, { useEffect } from "react";
import { connect } from "react-redux";

import history from "../../history";

const requireAuth = Component => {
	const ComposedComponent = props => {
		useEffect(
			() => {
				if (!props.auth) {
					history.push("/");
				}
			},
			[props.auth]
		);

		if (!props.auth) {
			return null;
		}

		return <Component {...props} />;
	};

	const mapStateToProps = state => {
		return { auth: state.auth.authenticated };
	};

	return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
