import React, { useState } from "react";
import "./PledgeModal.css";

export default function PledgeModal({
  isOpened,
  addAPledge,
  closeActiveModal,
}) {
  const [visible, setVisible] = useState("");
  const [pledgeText, setPledgeText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAPledge(pledgeText);
    setPledgeText("");
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
              <input
                type="text"
                className="modal__input"
                id="pledge-input"
                name="pledge"
                placeholder="Enter text here"
                required
                minLength="2"
                maxLength="40"
                onChange={(e) => setPledgeText(e.target.value)}
                value={pledgeText}
              />
            </label>
            <fieldset className="modal__label modal__label_email-permission">
              <legend className="modal__label">
                Would you like to be reminded periodically about your pledge?
              </legend>
              <div id="modal__email-permissions">
                <div className="modal__email-permission-choice">
                  <input
                    type="radio"
                    className="modal__input"
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
                    className="modal__input"
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
                  <input
                    type="email"
                    className="modal__input"
                    id="email-input"
                    name="email"
                    placeholder=""
                    required
                    minLength="2"
                    maxLength="40"
                  />
                </label>
              </div>
            </fieldset>
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
