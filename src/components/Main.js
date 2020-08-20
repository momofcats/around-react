import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const [cards, setCards] = useState([]);

	function handleCardLike(card) {
		// Check one more time if this card was already liked
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		// Send a request to the API and getting the updated card data

		if (isLiked) {
			api.removeLike(card._id).then((newCard) => {
			const	newCards = cards.map((c) => (c._id === card._id ? newCard : c));
				setCards(newCards);
			});
		} else {
			api.addLike(card._id).then((newCard) => {
			const	newCards = cards.map((c) => (c._id === card._id ? newCard : c));
				setCards(newCards);
			});
		}
	}

	useEffect(() => {
		api.getInitialCards().then((cards) => {
			setCards(cards);
		});
	}, []);

	return (
		<main>
			<section className="profile page__section">
				<div className="media">
					<div className="media__image-container">
						<img
							alt="profile"
							className="media__image"
							src={currentUser.avatar}
						/>
						<button
							onClick={props.onEditAvatar}
							className="media__btn media__btn_size_lg media__btn_hoverable"
							type="button"
						></button>
					</div>
					<div className="media__body">
						<div className="media__item">
							<h1 className="media__name">{currentUser.name}</h1>
							<button
								onClick={props.onEditProfile}
								className="media__btn media__btn_size_sm button"
								type="button"
							></button>
						</div>
						<p className="media__job">{currentUser.about}</p>
					</div>
				</div>
				<button
					onClick={props.onAddPlace}
					className="profile__btn button"
					type="button"
				></button>
			</section>
			<ul className="gallery page__section">
				{cards.map((card, id) => (
					<Card
						key={id}
						card={card}
						onDelete={props.onDeleteCard}
						onCardClick={props.onCardClick}
						onCardLike={handleCardLike}
					/>
				))}
			</ul>
		</main>
	);
}

export default Main;
