import React from "react";
function Form(props) {
	return <form
		className="form"
		action="#"
		noValidate
		name={props.name}
		onSubmit={props.onSubmit}
	>
		<h2 className="form__title">{props.title}</h2>
		{props.children}
		<button className="form__submit-btn" type="submit" data-text="Save">
			{props.buttonText}
		</button>
	</form>;
}
export default Form;