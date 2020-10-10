import React, {useState, useEffect } from "react";
import Form from "./Form";
import { Link, useHistory } from "react-router-dom";
import "../blocks/authentication/authentication.css";
import authApi from "../utils/authApi";

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const resetForm = () => {
		setEmail('');
		setPassword('');
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!email || !password){
			return;
		}
		authApi.authorize({email, password})
		.then((data) => {
			 localStorage.setItem('jwt', data.token);
				props.onLogin();
		})
		.then(resetForm)
		.then(() => history.push("/"))
		.catch(err => {
			console.log(err);
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
					name="login"
					title="Log in"
					buttonText="Log in"
					onSubmit={handleSubmit}
				>
					<input
						className="form__input form__input_theme_dark"
						placeholder="Email"
						type="email"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className="form__input form__input_theme_dark"
						placeholder="Password"
						type="password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
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
