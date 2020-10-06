import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import "../blocks/authentication/authentication.css";

function Register(props) {
  return (
		<section className="authentication page__section">
			<div className="authentication__container">
      <h2 className="authentication__title">{props.title}</h2>
				<Form
					name="register"
					title="Sing up"
					buttonText="Sign up"
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
					<span>Already a member?</span>
					<Link className="authentication__link" to="/signin">Login here!</Link>
				</div>
			</div>
		</section>
	);
}

export default Register;
