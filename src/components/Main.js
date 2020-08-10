import React from 'react';

function Main(props) {
  return (
    <main>
				<section className="profile page__section">
					<div className="media">
						<div className="media__image-container">
							<img alt="profile image" className="media__image" />
							<button onClick={props.onEditAvatar}
								className="media__btn media__btn_size_lg media__btn_hoverable"
								type="button"
							></button>
						</div>
						<div className="media__body">
							<div className="media__item">
								<h1 className="media__name"></h1>
								<button onClick={props.onEditProfile}
									className="media__btn media__btn_size_sm button"
									type="button"
								></button>
							</div>
							<p className="media__job"></p>
						</div>
					</div>
					<button onClick={props.onAddPlace} className="profile__btn button" type="button"></button>
				</section>
				<ul className="gallery page__section"></ul>
			</main>
  );
}

export default Main;