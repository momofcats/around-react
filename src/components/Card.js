import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const card = props.card;
	const isOwner = card.owner._id === currentUser._id;
	function handleClick() {
		props.onCardClick(card);
	}
	return (
		<li className="card">
			{isOwner ? (
				<button
					type="button"
					className="button card__del"
					onClick={props.onDelete}
				></button>
			) : (
				""
			)}
			<div
				className="card__img"
				style={{ backgroundImage: `url(${card.link})` }}
				onClick={handleClick}
			></div>
			<div className="card__description-wrapper">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__likes-container">
					<button className="card__like button"></button>
					<p className="card__likes">{card.likes.length}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
