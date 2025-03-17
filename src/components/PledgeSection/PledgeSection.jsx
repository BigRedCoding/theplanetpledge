import React, { useEffect, useState } from "react";
import "./PledgeSection.css";

export default function PledgeSection({ pledges }) {
  const [pledgesInput, setPledgesInput] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);

  const displayPledges = () => {
    if (pledges.length > 0) {
      setPledgesInput(pledges);
    }

    const pledgesDefault = [
      "Bike more",
      "Composting",
      "Ban plastic cups",
      "Go vegan",
      "Reduce food waste",
      "Grow our own produce",
      "Plant trees",
      "Start a garden",
      "Public transit",
      "Car pool",
      "Recycling",
      "Pick up trash",
      "Use less water",
      "Eat organic foods",
      "Save electricity",
    ];

    const pledgeWords = pledgesDefault
      .toString()
      .split(",")
      .filter((pledgeWord) => pledgeWord.trim() !== ",");

    const pledgesCombined = [...pledgeWords, ...pledgesInput];

    const newPledgeList = pledgesCombined.map((pledgeWord, index) => {
      const size = Math.floor(Math.random() * 30) + 25;
      return (
        <span
          key={index}
          className="pledge__word"
          style={{
            fontSize: `${size}px`,
            color: `hsl(${Math.random() * 360}, 100%, 40%)`,
            padding: "0 5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = e.target.style.color;
            e.target.style.border = `2px solid #3A426D`;
            e.target.style.color = "#fff";
            e.target.style.fontSize = `${size + 5}px`;
            e.target.style.transition = `color 0.5s; backgroundColor 0.5s; fontSize 0.5s`;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = e.target.style.backgroundColor;
            e.target.style.backgroundColor = "transparent";
            e.target.style.border = "none";
            e.target.style.fontSize = `${size}px`;
          }}
        >
          {pledgeWord}
        </span>
      );
    });

    setPledgeList(newPledgeList);
  };

  useEffect(() => {
    if (pledgesInput.length > 0) {
      displayPledges();
    }
  }, [pledgesInput]);

  useEffect(() => {
    if (pledges.length > 0) {
      setPledgesInput(pledges);
    }
  }, [pledges]);

  useEffect(() => {
    setPledgesInput(pledges);
    displayPledges();
  }, []);

  return (
    <div className="pledge-section">
      <section className="pledge page__section">
        <h2 className="pledge__caption">
          Join Others Pledging to Make a Difference
        </h2>
        <div className="pledge__wordCloud">{pledgeList}</div>
      </section>
    </div>
  );
}
