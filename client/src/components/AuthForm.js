import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class AuthForm extends React.Component {
	inputFieldGenerator(fieldProps) {
		function checkForError(output) {
			if (fieldProps.meta.touched && fieldProps.meta.error) {
				return output;
			}
		}

		return (
			<div className="form-group">
				<label htmlFor={fieldProps.id}>{fieldProps.label}</label>
				<input
					type={fieldProps.type}
					className={`form-control ${checkForError("is-invalid")}`}
					id={fieldProps.id}
					placeholder={fieldProps.placeholder}
					autoComplete="off"
					{...fieldProps.input}
				/>
				<div className="invalid-feedback">{checkForError(fieldProps.meta.error)}</div>
			</div>
		);
	}

	submitBtnContent = () => {
		if (this.props.submitting) {
			return (
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			);
		}

		return this.props.submitBtnName;
	};

	onFormSubmit = formValues => {
		return this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
				<Field name="email" label="Email Address" id="email-field" placeholder="Email" type="email" component={this.inputFieldGenerator} />
				<Field name="password" label="Password" id="password-field" placeholder="Password" type="password" component={this.inputFieldGenerator} />
				<button disabled={!this.props.valid || this.props.submitting} type="submit" className="btn btn-primary">
					{this.submitBtnContent()}
				</button>
				<Link to="/" className="btn btn-danger ml-2">
					Cancel
				</Link>
			</form>
		);
	}
}

const formInputValidator = formValues => {
	var errors = {};

	if (!formValues.email) {
		errors.email = "Please Provide An Email Address";
	}

	if (!formValues.password) {
		errors.password = "Please Provide A Password";
	}

	return errors;
};

export default reduxForm({
	form: "AuthForm",
	validate: formInputValidator
})(AuthForm);
