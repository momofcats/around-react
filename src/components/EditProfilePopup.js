import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const currentUser = useContext(CurrentUserContext);

	function handleChange(e) {
		const { name, value } = e.target;
		switch (name) {
			case "name":
				setName(value);
				break;
			case "about":
				setDescription(value);
				break;
			default:
				break;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateUser({
			name,
			about: description,
		});
	}

	useEffect(() => {
		if (currentUser.name) {
			setName(currentUser.name);
		}
		if (currentUser.about) {
			setDescription(currentUser.about);
		}
	}, [currentUser]);

	return (
		<PopupWithForm
			name="profile"
			title="Edit profile"
			buttonText="Save"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<input
				required
				pattern="[a-zA-Z\s\-]+"
				type="text"
				value={name}
				className="form__input js-input-name"
				name="name"
				placeholder="Name"
				onChange={handleChange}
				minLength="2"
				maxLength="40"
			/>
			<input
				required
				type="text"
				value={description}
				className="form__input js-input-job"
				name="about"
				placeholder="About me"
				onChange={handleChange}
				minLength="2"
				maxLength="200"
			/>
		</PopupWithForm>
	);
}

export default EditProfilePopup;
