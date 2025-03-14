//Styles
import "./App.css";
import Main from "../Main/Main";

import { getAllPledges, addPledge } from "../../utils/api.js";
import { useEffect, useState } from "react";

function App() {
  const [pledges, setPledges] = useState([]);

  const getPledges = () => {
    getAllPledges()
      .then((res) => {
        console.log(res.data);
        const dataArray = res.data.map((item) => item.description);

        setPledges(dataArray);
      })
      .catch(() => console.error());
  };

  const addAPledge = (string) => {
    addPledge(string)
      .then(() => {
        getAllPledges();
      })
      .catch(() => console.error());
  };
  useEffect(() => getPledges(), []);

  return (
    <div className="page">
      <Main pledges={pledges} addAPledge={addAPledge} />
    </div>
  );
}

export default App;
