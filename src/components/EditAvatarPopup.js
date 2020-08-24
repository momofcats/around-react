import React, {useRef, useState} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const input = useRef(null);
  const [url, setUrl] = useState('');

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: input.current.value,
    });
  }


  return (
    <PopupWithForm
					name="change-avatar"
					title="Change profile picture"
					buttonText="Save"
					isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
				>
					<input
						type="url"
						className="form__input js-input-link"
						name="avatar"
            placeholder="Url"
            ref={input}
            input={url}
            required
            onChange={handleChange}
					/>
				</PopupWithForm>
  )
}

export default EditAvatarPopup;