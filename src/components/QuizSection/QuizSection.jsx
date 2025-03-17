import React, { useState } from "react";

import "./QuizSection.css";
import { questions } from "../../utils/constants";

export default function QuizSection({ setOpenModal, setUserResult }) {
  const [errorMessage, setErrorMessage] = useState("");

  const calculateScore = (questionId, value) => {
    let score = 0;
    if (questionId === "shower-minutes") {
      if (value < 10) score = 10;
      else if (value >= 11 && value <= 20) score = 5;
      else if (value > 20) score = 0;
    } else if (questionId === "dishwasher-cycles") {
      if (value < 3) score = 10;
      else if (value >= 4 && value <= 6) score = 5;
      else if (value > 6) score = 0;
    } else if (questionId === "lawn-watering") {
      if (value < 2) score = 10;
      else if (value >= 3 && value <= 4) score = 5;
      else if (value > 4) score = 0;
    }
    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let totalScore = 0;
    let allAnswered = true;

    questions.forEach((question) => {
      const { id, type, options } = question;
      if (type === "number") {
        const inputValue = document.getElementById(id)?.value;
        if (!inputValue) {
          allAnswered = false;
        } else {
          totalScore += calculateScore(id, parseInt(inputValue));
        }
      } else if (type === "radio") {
        const selectedOption = options.find(
          (option) =>
            document.querySelector(`input[name=${id}]:checked`)?.value ===
            option.toLowerCase()
        );
        if (!selectedOption) {
          allAnswered = false;
        } else {
          if (selectedOption === "Yes") totalScore += 10;
          else if (selectedOption === "Sometimes") totalScore += 5;
          else if (selectedOption === "No") totalScore += 0;
        }
      }
    });

    if (allAnswered) {
      setUserResult(totalScore);
      setOpenModal("results-modal");
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill out all answers");
    }
  };

  return (
    <div className="quiz-section">
      <section className="quiz page__section">
        <h2 className="quiz__title" id="quiz">
          Energy Saver Quiz
        </h2>
        <form onSubmit={handleSubmit} className="quiz__Questions">
          {questions.map((question, index) => (
            <div className="quiz__Question" key={index}>
              {question.type === "number" ? (
                <>
                  <label htmlFor={question.id} className="quiz__Question_Desc">
                    {index + 1}. {question.label}
                    <input
                      type={question.type}
                      id={question.id}
                      className="quiz__Question_number_Answer"
                      placeholder={question.placeholder}
                      min={question.min}
                      max={question.max}
                      step={question.step}
                    />
                  </label>
                </>
              ) : (
                <>
                  <p className="quiz__Question_Desc">
                    {index + 1}. {question.label}
                  </p>
                  <div className="quiz__Checkboxes">
                    {question.options.map((option, idx) => (
                      <label
                        htmlFor={`${question.id}-${option.toLowerCase()}`}
                        className="quiz__Question_choice"
                        key={idx}
                      >
                        {option}
                        <input
                          name={question.id}
                          type={question.type}
                          id={`${question.id}-${option.toLowerCase()}`}
                          className="quiz__Question_choice_Answer"
                          value={option.toLowerCase()}
                        />
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          {errorMessage && (
            <span className="error-message">*** {errorMessage}</span>
          )}

          <button type="submit" className="quiz__Submission">
            See your results
          </button>
        </form>
      </section>
    </div>
  );
}
