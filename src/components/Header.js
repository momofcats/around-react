import React from 'react';
import logo from '../images/logo.svg';
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="header">
				<img src={logo} alt="logo" className="header__logo" />
        {props.loggedIn && <p>{props.userEmail}</p>}
        <NavBar onLogOut={props.onLogOut} loggedIn={props.loggedIn} route={props.route}/>
			</header>
  );
}

export default Header;