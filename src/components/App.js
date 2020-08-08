import React from 'react';
import Header from './header';


function App() {
	return (
		<>
			<Header />
			<main>
				<section className="profile page__section">
					<div className="media">
						<div className="media__image-container">
							<img alt="profile image" className="media__image" />
							<button
								className="media__btn media__btn_size_lg media__btn_hoverable"
								type="button"
							></button>
						</div>
						<div className="media__body">
							<div className="media__item">
								<h1 className="media__name"></h1>
								<button
									className="media__btn media__btn_size_sm button"
									type="button"
								></button>
							</div>
							<p className="media__job"></p>
						</div>
					</div>
					<button className="profile__btn button" type="button"></button>
				</section>
				<ul className="gallery page__section"></ul>
			</main>
			<footer className="footer page__section">
				<p className="footer__copyright">&#169; 2020 Around The U.S.</p>
			</footer>
			<div className="popup popup_background_light js-popup-profile">
				<div className="popup__container popup__container_type_form">
					<button className="popup__btn-close button" type="button"></button>
					<form className="form" action="#" name="profile" noValidate>
						<h2 className="form__title">Edit profile</h2>
						<input
							id="name-input"
							required
							pattern="[a-zA-Z\s\-]+"
							type="text"
							className="form__input js-input-name"
							name="name"
							placeholder="Name"
							minLength="2"
							maxLength="40"
						/>
						<span id="name-input-error" className="form__input-error"></span>
						<input
							id="job-input"
							required
							type="text"
							className="form__input js-input-job"
							name="about"
							placeholder="About me"
							minLength="2"
							maxLength="200"
						/>
						<span id="job-input-error" className="form__input-error"></span>
						<button className="form__submit-btn" type="submit" data-text="Save">
							Save
						</button>
					</form>
				</div>
			</div>
			<div className="popup popup_background_light js-popup-photo-form">
				<div className="popup__container popup__container_type_form">
					<button className="popup__btn-close button" type="button"></button>
					<form className="form" action="#" name="new place" noValidate>
						<h2 className="form__title">New Place</h2>
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
						<span id="title-input-error" className="form__input-error"></span>
						<input
							id="link-input"
							type="url"
							className="form__input js-input-link"
							name="link"
							placeholder="Image link"
							required
						/>
						<span id="link-input-error" className="form__input-error"></span>
						<button
							className="form__submit-btn"
							type="submit"
							data-text="Create"
						>
							Create
						</button>
					</form>
				</div>
			</div>
			<div className="popup popup_background_dark js-popup-picture">
				<div className="popup__container popup__container_type_picture">
					<button className="popup__btn-close button" type="button"></button>
					<img className="popup__image" />
					<h2 className="popup__title"></h2>
				</div>
			</div>
			<div className="popup popup_background_light js-popup-del-card">
				<div className="popup__container popup__container_type_form">
					<button className="popup__btn-close button" type="button"></button>
					<form className="form" action="#" name="delete card" noValidate>
						<h2 className="form__title">Are you sure?</h2>
						<button className="form__submit-btn" type="submit">
							Yes
						</button>
					</form>
				</div>
			</div>
			<div className="popup popup_background_light js-popup-change-avatar">
				<div className="popup__container popup__container_type_form">
					<button className="popup__btn-close button" type="button"></button>
					<form className="form" action="#" name="delete card" noValidate>
						<h2 className="form__title">Change profile picture</h2>
						<input
							id="avatar-input"
							type="url"
							className="form__input js-input-link"
							name="avatar"
							placeholder="Url"
							required
						/>
						<span id="avatar-input-error" className="form__input-error"></span>
						<button className="form__submit-btn" type="submit" data-text="Save">
							Save
						</button>
					</form>
				</div>
			</div>
			<template className="js-card-template">
				<li className="card">
					<button className="button card__del"></button>
					<div className="card__img"></div>
					<div className="card__description-wrapper">
						<h2 className="card__title"></h2>
						<div className="card__likes-container">
							<button className="card__like button"></button>
							<p className="card__likes"></p>
						</div>
					</div>
				</li>
			</template>
		</>
	);
}

export default App;
