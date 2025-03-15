//Styles
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.jsx";

import PledgeModal from "../PledgeModal/PledgeModal.jsx";

import { getAllPledges, addPledge, deletePledges } from "../../utils/api.js";
import { useEffect, useState } from "react";

function App() {
  const [pledges, setPledges] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const setOpenModal = (input) => {
    setActiveModal(input);
  };

  const getPledges = () => {
    getAllPledges()
      .then((res) => {
        const dataArray = res.data.map((item) => item.description);

        setPledges(dataArray);
      })
      .catch(() => console.error());
  };

  const addAPledge = (string) => {
    addPledge(string)
      .then(() => {
        getPledges();
      })
      .then(() => {
        closeActiveModal();
      })
      .catch(() => console.error());
  };

  const handleDeletePledges = () => {
    deletePledges().then(() => {
      getPledges();
    });
  };

  useEffect(() => getPledges(), []);

  return (
    <div className="page">
      <div className="page__content">
        <Header setOpenModal={setOpenModal} />
        <Main pledges={pledges} addAPledge={addAPledge} />
        <Footer />
      </div>
      <PledgeModal
        isOpened={activeModal === "pledge-modal" && "modal_opened"}
        addAPledge={addAPledge}
        closeActiveModal={closeActiveModal}
      />
      <button className="delete-pledges" onClick={handleDeletePledges}></button>
    </div>
  );
}

export default App;
