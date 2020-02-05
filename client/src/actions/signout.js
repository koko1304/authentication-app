import { SIGN_OUT } from "./types";

const signout = () => {
	localStorage.removeItem("token");
	return {
		type: SIGN_OUT
	};
};

export default signout;
