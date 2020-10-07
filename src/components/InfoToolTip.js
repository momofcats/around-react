import React from "react";
import PopupWithForm from "./PopupWithForm";
import success from "../images/success.svg";

function InfoToolTip(props) {
	return (
		<PopupWithForm
			name="infotooltip"
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<img src={success} alt="success" className="popup__icon" />
			<p className="popup__title page__centered">Success! You have now been registered.</p>
		</PopupWithForm>
	);
}

export default InfoToolTip;
