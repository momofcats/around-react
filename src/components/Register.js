import React, {useState, useEffect } from "react";
import Form from "./Form";
import { Link, useHistory } from "react-router-dom";
import "../blocks/authentication/authentication.css";
import authApi from "../utils/authApi";

function Register(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const resetForm = () => {
		setEmail('');
		setPassword('');
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		authApi.register({email, password})
		.then(resetForm)
		.then(() => {
			history.push("/signin");
			props.onSuccess();
		})
		.catch((err) => {
			console.log(err);
			props.onFail();
		})
	};
	useEffect(() => {
		if(localStorage.getItem('jwt')){
			history.push("/");
		}
	},[]);

  return (
		<section className="authentication page__section">
			<div className="authentication__container">
      <h2 className="authentication__title">{props.title}</h2>
				<Form
					name="register"
					title="Sing up"
					buttonText="Sign up"
					onSubmit={handleSubmit}
				>
					<input
						name="email"
						className="form__input form__input_theme_dark"
						placeholder="Email"
						type="email"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						name="password"
						className="form__input form__input_theme_dark"
						placeholder="Password"
						type="password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
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
