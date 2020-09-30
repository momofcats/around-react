import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup(props) {

  function handleSubmit(e) {
		e.preventDefault();
		props.onCardDelete(card);
	}
  return (
    <PopupWithForm
					name="del-card"
					title="Are you sure?"
					buttonText="Yes"
					isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          card={props.card}
				/>
  )
}

export default DeleteCardPopup;