import React from "react";

function PopupWithForm(props) {
	return (
		<div className={`popup popup_background_light js-popup-${props.name} ${props.isOpen? "popup_role_show" : ""}`}>
			<div className="popup__container popup__container_type_form">
				<button className="popup__btn-close button" type="button"></button>
				<form className="form" action="#" noValidate>
					<h2 className="form__title">{props.title}</h2>
          {props.children}
					<button className="form__submit-btn" type="submit" data-text="Save">
						{props.buttonText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;