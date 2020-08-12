import React from "react";

function Card(props) {
	return (
		<li className="card">
			<button className="button card__del"></button>
			<div
				className="card__img"
				style={{ backgroundImage: `url(${props.link})` }}
			></div>
			<div className="card__description-wrapper">
				<h2 className="card__title">{props.name}</h2>
				<div className="card__likes-container">
					<button className="card__like button"></button>
  <p className="card__likes">{props.likes.length}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
