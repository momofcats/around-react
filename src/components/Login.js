import React from "react";
import { Link } from 'react-router-dom';
import '../blocks/authentication/authentication.css';

function Login() {
  return (
    <section className="authentication page__section">
      <div className="authentication__container">
        <form>
          <h2 className="form__title form__title_theme_light">Log in</h2>
          <input className="form__input form__input_theme_light" placeholder="Email" />
          <input className="form__input form__input_theme_light" placeholder="Password" />
          <button type="submit" className="form__submit-btn form__submit-btn_theme_light">
            Log in
          </button>
        </form>
        <div className="authentication__nav">
          <p>Not a member yet? </p>
          <Link className="authentication__link" to="#">Sign up here!</Link>
        </div>
      </div>
    </section>
  )
};
export default Login;