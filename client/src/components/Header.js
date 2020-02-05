import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import signout from "../actions/signout";

const Header = props => {
	const activeClassSetter = path => {
		if (path === props.location.pathname) {
			return "active";
		}
	};

	const authBtn = () => {
		if (!props.auth) {
			return (
				<React.Fragment>
					<Link to="/signup" className="btn btn-success mr-2">
						Create An Account
					</Link>
					<Link to="/signin" className="btn btn-primary">
						Log In
					</Link>
				</React.Fragment>
			);
		} else {
			return (
				<button className="btn btn-danger" onClick={props.signout}>
					Log Out
				</button>
			);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					STARK INDUSTRIES
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={`nav-item ${activeClassSetter("/")}`}>
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className={`nav-item ${activeClassSetter("/feature")}`}>
							<Link className="nav-link" to="/feature">
								Feature
							</Link>
						</li>
						<li className={`nav-item ${activeClassSetter("/about")}`}>
							<Link className="nav-link" to="/about">
								About Us
							</Link>
						</li>
						<li className={`nav-item ${activeClassSetter("/contact")}`}>
							<Link className="nav-link" to="/contact">
								Contact Us
							</Link>
						</li>
					</ul>
					{authBtn()}
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return { auth: state.auth.authenticated };
};

export default connect(mapStateToProps, { signout })(Header);
