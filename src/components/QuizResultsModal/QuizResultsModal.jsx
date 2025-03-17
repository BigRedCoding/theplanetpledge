import React, { useState, useEffect } from "react";
import "./QuizResultsModal.css";

import { archetypes } from "../../utils/constants";

export default function QuizResultsModal({
  userScoreNum,
  isOpened,
  closeActiveModal,
}) {
  const [userResult, setUserResult] = useState("");

  function closeModal() {
    closeActiveModal("");
  }

  useEffect(() => {
    if (userScoreNum >= 0 && userScoreNum <= 25) {
      setUserResult(archetypes[3]);
    }

    if (userScoreNum >= 26 && userScoreNum <= 50) {
      setUserResult(archetypes[2]);
    }

    if (userScoreNum >= 51 && userScoreNum <= 75) {
      setUserResult(archetypes[1]);
    }

    if (userScoreNum > 75) {
      setUserResult(archetypes[0]);
    }
  }, [userScoreNum]);
  return (
    <div className={`quiz-results ${isOpened}`}>
      <div className="quiz-results__modal" id="quiz-results-modal">
        <div className="modal__container">
          <button
            type="button"
            className="quiz-results__close-button"
            onClick={closeModal}
          ></button>
          <h2 className="quiz-results__title">Energy Saver Quiz Results</h2>
          <p className="modal__archetype">{userResult}</p>
          <p className="modal__result">You scored {userScoreNum}%</p>
        </div>
      </div>
    </div>
  );
}
