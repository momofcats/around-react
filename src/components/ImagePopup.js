import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_background_dark js-popup-picture">
				<div className="popup__container popup__container_type_picture">
					<button className="popup__btn-close button" type="button"></button>
					<img className="popup__image" />
					<h2 className="popup__title"></h2>
				</div>
			</div>
  );
}

export default ImagePopup;