import React from "react";
import PopupWithForm from "./PopupWithForm";
import success from "../images/success.svg";

function InfoToolTip(props) {
	return (
		<PopupWithForm isOpen={props.isOpen} onClose={props.onClose}>
			<img src={success} alt="success" className="infotooltip__img" />
			<h2 className="infotooltip__text">
				Success! You have now been registered.
			</h2>
		</PopupWithForm>
	);
}

export default InfoToolTip;
