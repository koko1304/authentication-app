import axios from "axios";
import { SubmissionError } from "redux-form";

import { SIGN_UP } from "./types";
import history from "../history";

const signup = formValues => async dispatch => {
	const res = await axios.post("http://localhost:8080/users/new", formValues);

	if (!res.data.token) {
		throw new SubmissionError(res.data);
	} else {
		localStorage.setItem("token", res.data.token);

		dispatch({
			type: SIGN_UP,
			payload: res.data
		});

		history.push("/");
	}
};

export default signup;
