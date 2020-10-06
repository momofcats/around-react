import React from "react";
import Form from "./Form";
import { Link } from 'react-router-dom';
import '../blocks/authentication/authentication.css';

function Login() {
  return (
    <Form name="login" title="Log in"
    buttonText="Log in" authentication="true">
      <input className="form__input" placeholder="Email" type="email" required />
      <input className="form__input" placeholder="Password" type="password" required />
    </Form>
    // <section className="authentication page__section">
    //   <div className="authentication__container">
    //     <form>
    //       <h2 className="form__title form__title_theme_light">Log in</h2>
    //       <input className="form__input form__input_theme_light" placeholder="Email" type="email" required />
    //       <input className="form__input form__input_theme_light" placeholder="Password" type="password" required />
    //       <button type="submit" className="form__submit-btn form__submit-btn_theme_light">
    //         Log in
    //       </button>
    //     </form>
    //     <div className="authentication__link">
    //       <span>Not a member yet?</span>
    //       <Link to="#">Sign up here!</Link>
    //     </div>
    //   </div>
    // </section>
  )
};
export default Login;