import "../pages/index.css";

import Api from "../utils/api.js";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.theplanetpledge.justlearning.net"
    : "http://localhost:3001";

const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const pledgeForm = document.getElementById("pledgeForm");
  const pledgeInput = document.getElementById("pledgeInput");
  const pledgeList = document.getElementById("pledgeList");

  function loadPledges() {
    api
      .getAllPledges()
      .then((pledges) => {
        pledgeList.innerHTML = "";
        pledges.forEach(function (pledge) {
          const li = document.createElement("li");
          li.textContent = pledge.description;
          pledgeList.appendChild(li);
        });
      })
      .catch(() => {
        return [];
      });
  }

  function savePledge(pledge) {
    api.addPledge(pledge).then(() => {
      loadPledges();
    });
  }

  pledgeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const pledge = pledgeInput.value.trim();
    if (pledge) {
      savePledge(pledge);
      pledgeInput.value = "";
    }
  });

  loadPledges();
});
