import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isDelCardPopupOpen, setIsDelCardPopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(0);

	function handleCardClick(card) {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	}

	function handleDelCardClick() {
		setIsDelCardPopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsDelCardPopupOpen(false);
		setIsImagePopupOpen(false);
		setSelectedCard(0);
	}

	function handleEscKey(evt) {
		if (evt.key === "Escape") {
			closeAllPopups();
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	});

	return (
		<>
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onDeleteCard={handleDelCardClick}
				onCardClick={handleCardClick}
			/>
			<Footer />
			<PopupWithForm
				name="profile"
				title="Edit profile"
				buttonText="Save"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<input
					required
					pattern="[a-zA-Z\s\-]+"
					type="text"
					className="form__input js-input-name"
					name="name"
					placeholder="Name"
					minLength="2"
					maxLength="40"
				/>
				<input
					required
					type="text"
					className="form__input js-input-job"
					name="about"
					placeholder="About me"
					minLength="2"
					maxLength="200"
				/>
			</PopupWithForm>
			<PopupWithForm
				name="photo-form"
				title="New Place"
				buttonText="Create"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				<input
					id="title-input"
					type="text"
					className="form__input js-input-title"
					name="name"
					placeholder="Title"
					minLength="1"
					maxLength="30"
					required
				/>
				<input
					type="url"
					className="form__input js-input-link"
					name="link"
					placeholder="Image link"
					required
				/>
			</PopupWithForm>
			<PopupWithForm
				name="change-avatar"
				title="Change profile picture"
				buttonText="Save"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<input
					type="url"
					className="form__input js-input-link"
					name="avatar"
					placeholder="Url"
					required
				/>
			</PopupWithForm>
			<PopupWithForm
				name="del-card"
				title="Are you sure?"
				buttonText="Yes"
				isOpen={isDelCardPopupOpen}
				onClose={closeAllPopups}
			/>
			<ImagePopup
				isOpen={isImagePopupOpen}
				onClose={closeAllPopups}
				card={selectedCard}
			/>
		</>
	);
}

export default App;
