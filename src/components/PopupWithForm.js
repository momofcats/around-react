import React from "react";

function PopupWithForm(props) {
	return (
		<div className={`popup popup_background_light js-popup-${props.name}`}>
			<div className="popup__container popup__container_type_form">
				<button className="popup__btn-close button" type="button"></button>
				<form className="form" action="#" noValidate>
					<h2 className="form__title">{props.title}</h2>
					<button className="form__submit-btn" type="submit" data-text="Save">
						{props.button-text}
					</button>
				</form>
			</div>
		</div>
	);
}
