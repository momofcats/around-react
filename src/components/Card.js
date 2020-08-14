import React from "react";

function Card(props) {
	const card = props.card;
	function handleClick() {
		props.onCardClick(card);
	}
	return (
		<li className="card">
			{card.isOwner ? (
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
