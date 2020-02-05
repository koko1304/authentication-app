import { SIGN_UP, SIGN_OUT, SIGN_IN } from "../actions/types";

const token = localStorage.getItem("token");

const INITIAL_STATE = {
	authenticated: (function() {
		if (!token) {
			return "";
		}

		return token;
	})()
};

const authReducer = (auth = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case SIGN_UP:
			return { authenticated: actions.payload.token };
		case SIGN_OUT:
			return { authenticated: "" };
		case SIGN_IN:
			return { authenticated: actions.payload.token };
		default:
			return auth;
	}
};

export default authReducer;
