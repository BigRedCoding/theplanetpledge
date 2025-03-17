import React, { useState } from "react";
import "./Main.css";
import PledgeSection from "../PledgeSection/PledgeSection";
import QuizSection from "../QuizSection/QuizSection";
import Resources from "../Resources/Resources";

export default function Main({ pledges, setOpenModal, setUserResult }) {
  return (
    <div className="main">
      <div className="main__container">
        <PledgeSection pledges={pledges} />
        <QuizSection
          setOpenModal={setOpenModal}
          setUserResult={setUserResult}
        />
        <Resources />
      </div>
    </div>
  );
}
