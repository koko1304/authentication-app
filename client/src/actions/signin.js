import axios from "axios";
import { SubmissionError } from "redux-form";

import { SIGN_IN } from "./types";
import history from "../history";

const signin = formValues => async dispatch => {
	await axios
		.post("http://localhost:8080/signin", formValues)
		.then(res => {
			localStorage.setItem("token", res.data.token);

			dispatch({
				type: SIGN_IN,
				payload: res.data
			});

			history.push("/");
		})
		.catch(err => {
			throw new SubmissionError({ email: " ", password: "Email and Password are incorrect" });
		});
};

export default signin;
