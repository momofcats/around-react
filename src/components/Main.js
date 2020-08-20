import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);
	// const [userName, setUserName] = useState("");
	// const [userDescription, setUserDescription] = useState("");
	// const [userAvatar, setUserAvatar] = useState("");
	// const [cards, setCards] = useState([]);

	// useEffect(() => {
	// 	api.getAppInfo().then(([cards, userData]) => {
	// 		setUserName(userData.name);
	// 		setUserDescription(userData.about);
	// 		setUserAvatar(userData.avatar);
	// 		cards.map((card) => {
	// 			card.isOwner = userData._id === card.owner._id;
	// 			return card;
	// 		});
	// 		setCards(cards);
	// 	});
	// }, []);

	return (
		<main>
			<section className="profile page__section">
				<div className="media">
					<div className="media__image-container">
					<img alt="profile" className="media__image" src={currentUser.avatar} />
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
				{/* {cards.map((card, id) => (
					<Card
						key={id}
						card={card}
						onDelete={props.onDeleteCard}
						onCardClick={props.onCardClick}
					/>
				))} */}
			</ul>
		</main>
	);
}

export default Main;
