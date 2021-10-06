import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const emailPattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			isEmailValid: false,
			isPasswordValid: false,
			isFormSubmitted: false,
		};
	}

	onPasswordChange = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				password: e.target.value,
				isPasswordValid: e.target.value.length > 5 /* ? true : false */,
			};
		});
		/* 
		if (e.target.value.length > 5) {
			this.setState((prevState) => {
				return {
					...prevState,
					isPasswordValid: true,
				};
			});
		} else {
			this.setState((prevState) => {
				return {
					...prevState,
					isPasswordValid: false,
				};
			});
		} */
	};

	onEmailChange = (e) => {
		this.setState((prevState) => {
			return {
				...prevState,
				email: e.target.value,
				isEmailValid: emailPattern.test(e.target.value),
			};
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.isEmailValid && this.state.isPasswordValid) {
			this.setState((prevState) => {
				return {
					...prevState,
					isFormSubmitted: true,
				};
			});
		}
	};

	render() {
		return !this.state.isFormSubmitted ? (
			<div style={{ padding: "3rem" }}>
				<form onSubmit={this.handleSubmit}>
					<div className="mb-3">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label"
						>
							Email address
						</label>
						<input
							type="email"
							className={
								this.state.isEmailValid
									? "form-control is-valid"
									: "form-control is-invalid"
							}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={this.onEmailChange}
						/>
						<div id="emailHelp" className="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="exampleInputPassword1"
							className="form-label"
						>
							Password
						</label>
						<input
							type="password"
							className={
								this.state.isPasswordValid
									? "form-control is-valid"
									: "form-control is-invalid"
							}
							id="exampleInputPassword1"
							onChange={this.onPasswordChange}
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1"
						>
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		) : (
			<div>FORM SUBMITTED</div>
		);
	}
}

