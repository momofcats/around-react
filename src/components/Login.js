import React, {useState, useEffect } from "react";
import Form from "./Form";
import { Link, useHistory } from "react-router-dom";
import "../blocks/authentication/authentication.css";
import authApi from "../utils/authApi";

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	return (
		<section className="authentication page__section">
			<div className="authentication__container">
      <h2 className="authentication__title">{props.title}</h2>
				<Form
					name="login"
					title="Log in"
					buttonText="Log in"
				>
					<input
						className="form__input form__input_theme_dark"
						placeholder="Email"
						type="email"
						required
					/>
					<input
						className="form__input form__input_theme_dark"
						placeholder="Password"
						type="password"
						required
					/>
				</Form>
				<div className="authentication__nav">
					<span>Not a member yet?</span>
					<Link className="authentication__link" to="/signup">Sign up here!</Link>
				</div>
			</div>
		</section>
	);
}

export default Login;
