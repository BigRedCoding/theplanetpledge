import "./Main.css";

export default function Main({ pledges, addPledge }) {
  const pledgesList = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    addPledge(e.value);
    pledgeInput.value = "";
  };

  console.log(pledges);

  for (let i = 0; i < pledges.length; i++) {
    pledgesList.push(
      <li key={i}>
        <p>{pledges[i]}</p>
      </li>
    );
  }

  return (
    <div className="main">
      <div className="main__container">
        <h1>Submit Your Pledge</h1>
        <form id="pledgeForm">
          <input
            type="text"
            id="pledgeInput"
            placeholder="Enter your pledge"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            required
          />
          <button type="submit">Submit Pledge</button>
        </form>
        <h2>Submitted Pledges</h2>
        <ul id="pledgeList">{pledgesList}</ul>
      </div>
    </div>
  );
}
