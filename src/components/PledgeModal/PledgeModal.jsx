import React, { useState } from "react";
import "./PledgeModal.css";

export default function PledgeModal({
  isOpened,
  addAPledge,
  closeActiveModal,
}) {
  const [visible, setVisible] = useState("");
  const [pledgeText, setPledgeText] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pledgeText.trim() === "") {
      setErrorMessage("Please fill out all answers");
      return;
    }

    const contactChoice = document.querySelector(
      'input[name="contact"]:checked'
    );
    if (!contactChoice) {
      setErrorMessage("Please fill out all answers");
      return;
    }

    if (contactChoice.value === "yes" && email.trim() === "") {
      setErrorMessage("Please fill out all answers");
      return;
    }

    addAPledge(pledgeText, email);
    setPledgeText("");
    setEmail("");
    setErrorMessage("");
  };

  const yesClick = () => {
    setVisible("email_mod");
  };

  const noClick = () => {
    setVisible("");
  };

  return (
    <div className={`pledge-modal ${isOpened}`}>
      <div className="pledge-modal__container">
        <button
          type="button"
          className="pledge-modal__close-button"
          onClick={closeActiveModal}
        ></button>

        <div className="modal__container">
          <h2 className="modal__title">Make Your Pledge</h2>

          <form name="" className="modal__form" id="" noValidate>
            <label htmlFor="pledge-input" className="modal__label">
              What will you do to make the earth better?
              <textarea
                className="modal__input"
                id="pledge-input"
                name="pledge"
                placeholder="Enter text here"
                required
                minLength="2"
                maxLength="40"
                onChange={(e) => setPledgeText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                value={pledgeText}
              />
            </label>
            <fieldset className="modal__label modal__label_email-permission">
              <legend className="modal__label">
                Would you like to be reminded periodically about your pledge?
              </legend>
              <div className="modal__email-permissions">
                <div className="modal__email-permission-choice">
                  <input
                    type="radio"
                    className="modal__radio-input"
                    id="email-yes"
                    name="contact"
                    value="yes"
                    onClick={yesClick}
                  />
                  <label htmlFor="email-yes" className="modal__label">
                    Yes
                  </label>
                </div>
                <div className="modal__email-permission-choice">
                  <input
                    type="radio"
                    className="modal__radio-input"
                    id="email-no"
                    name="contact"
                    value="no"
                    onClick={noClick}
                  />
                  <label htmlFor="email-no" className="modal__label">
                    No
                  </label>
                </div>
              </div>

              <div className={`modal__form_email-input ${visible}`}>
                <label
                  htmlFor="email-input"
                  className="modal__label"
                  id="email-input-label"
                >
                  Email Address
                  <textarea
                    type="email"
                    className="modal__input"
                    id="email-input"
                    name="email"
                    placeholder="Enter email here"
                    required={visible === "email_mod"}
                    minLength="2"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                      }
                    }}
                    value={email}
                  />
                </label>
              </div>
            </fieldset>
            {errorMessage && (
              <span className="error-message">*** {errorMessage}</span>
            )}

            <button
              type="submit"
              className="modal__submit-button"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit My Pledge
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
