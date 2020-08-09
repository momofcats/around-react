import React from 'react';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector(".js-popup-change-avatar").classList.add("popup_role_show");
  }

  function handleEditProfileClick() {
    document.querySelector(".js-popup-profile").classList.add("popup_role_show");
  }

  function handleAddPlaceClick() {
    document.querySelector(".js-popup-photo-form").classList.add("popup_role_show");
  }


  return (
    <main>
				<section className="profile page__section">
					<div className="media">
						<div className="media__image-container">
							<img alt="profile image" className="media__image" />
							<button onClick={handleEditAvatarClick}
								className="media__btn media__btn_size_lg media__btn_hoverable"
								type="button"
							></button>
						</div>
						<div className="media__body">
							<div className="media__item">
								<h1 className="media__name"></h1>
								<button onClick={handleEditProfileClick}
									className="media__btn media__btn_size_sm button"
									type="button"
								></button>
							</div>
							<p className="media__job"></p>
						</div>
					</div>
					<button onClick={handleAddPlaceClick} className="profile__btn button" type="button"></button>
				</section>
				<ul className="gallery page__section"></ul>
			</main>
  );
}

export default Main;