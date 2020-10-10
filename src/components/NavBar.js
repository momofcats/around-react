import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar(props) {
  const history = useHistory();
	function signOut() {
    localStorage.removeItem('jwt');
    history.push("/login");
	}
	return (
		<nav className="menu">
			<NavLink exact className="menu__item" to="/signin">
				Log in
			</NavLink>
			<NavLink exact className="menu__item" to="/signup">
				Sign up
			</NavLink>
			<button onClick={signOut} className="menu__item">
				Log out
			</button>
		</nav>
	);
}
export default NavBar;