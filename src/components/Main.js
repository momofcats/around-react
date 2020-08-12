import React, { useState, useEffect } from "react";
import api from "../utils/Api";

function Main(props) {
	const [userName, setUserName] = useState("");
	const [userDescription, setUserDescription] = useState("");
	const [userAvatar, setUserAvatar] = useState("");

	useEffect(() => {
		api.getUserInfo().then((res) => {
			setUserName(res.name);
			setUserDescription(res.about);
			setUserAvatar(res.avatar);
		});
	});
	return (
		<main>
			<section className="profile page__section">
				<div className="media">
					<div className="media__image-container">
						<img
							alt="profile"
							className="media__image"
							src={userAvatar}
						/>
						<button
							onClick={props.onEditAvatar}
							className="media__btn media__btn_size_lg media__btn_hoverable"
							type="button"
						></button>
					</div>
					<div className="media__body">
						<div className="media__item">
							<h1 className="media__name">{userName}</h1>
							<button
								onClick={props.onEditProfile}
								className="media__btn media__btn_size_sm button"
								type="button"
							></button>
						</div>
						<p className="media__job">{userDescription}</p>
					</div>
				</div>
				<button
					onClick={props.onAddPlace}
					className="profile__btn button"
					type="button"
				></button>
			</section>
			<ul className="gallery page__section"></ul>
		</main>
	);
}

export default Main;
