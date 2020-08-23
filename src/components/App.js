import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isDelCardPopupOpen, setIsDelCardPopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(0);
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		api.getUserInfo().then((data) => {
			setCurrentUser(data);
		});
	}, []);

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

	function handleUpdateUser(user) {
		api.updateUserInfo(user).then((res) => {
			setCurrentUser(res);
		});
		closeAllPopups();
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
			<CurrentUserContext.Provider value={currentUser}>
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onDeleteCard={handleDelCardClick}
					onCardClick={handleCardClick}
				/>
				<Footer />
				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
				
				<PopupWithForm
					name="photo-form"
					title="New Place"
					buttonText="Create"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
					<input
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
			</CurrentUserContext.Provider>
		</>
	);
}

export default App;
