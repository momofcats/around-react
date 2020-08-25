import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
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
	const [cards, setCards] = useState([]);

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		if (isLiked) {
			api.removeLike(card._id).then((newCard) => {
				setCardsOnLike(card._id, newCard);
			});
		} else {
			api.addLike(card._id).then((newCard) => {
				setCardsOnLike(card._id, newCard);
			});
		}
	}

	function setCardsOnLike(cardId, newCard) {
		const newCards = cards.map((c) => (c._id === cardId ? newCard : c));
		setCards(newCards);
	}

	function handleCardDelete(card) {
		api.delCard(card._id).then((res) => {
			const newCards = cards.filter((c) => c._id !== card._id);
			setCards(newCards);
		});
	}

	function handleAddPlaceSubmit(formData) {
		api
			.postNewCard(formData)
			.then((newCard) => {
				setCards([newCard, ...cards]);
			})
			.catch(console.log);
		console.log(cards);
		closeAllPopups();
	}

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
		api
			.updateUserInfo(user)
			.then((res) => {
				setCurrentUser(res);
			})
			.catch(console.log);
		closeAllPopups();
	}

	function handleUpdateAvatar(avatarUrl) {
		api
			.updateAvatar(avatarUrl)
			.then((res) => {
				setCurrentUser(res);
			})
			.catch(console.log);
		closeAllPopups();
	}

	useEffect(() => {
		api
			.getUserInfo()
			.then((data) => {
				setCurrentUser(data);
			})
			.catch(console.log);
	}, []);

	useEffect(() => {
		api
			.getInitialCards()
			.then((cards) => {
				setCards(cards);
			})
			.catch(console.log);
	}, []);

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
					cards={cards}
					onCardDelete={handleCardDelete}
					onCardLike={handleCardLike}
				/>
				<Footer />
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
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
