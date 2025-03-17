import "./Resources.css";

import EnergyStar from "../../assets/energy-star.jpg";
import Commute from "../../assets/commute.jpg";
import Inspection from "../../assets/home-inspection.jpg";
import Pesticide from "../../assets/pesticide.jpg";

export default function Resources() {
  return (
    <div className="resources">
      <section className="resources page__section" id="resources">
        <h2 className="resources__caption">Resources</h2>
        <div className="resources__cards">
          <section className="resources__card">
            <img
              src={EnergyStar}
              alt="Energy Star image"
              className="resources__image"
            />
            <div className="resources__content">
              <h3 className="resources__title">Energy Star</h3>
              <p className="resources__description">
                Check the{" "}
                <a
                  className="resources__link"
                  href="https://www.energystar.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Energy Star
                </a>{" "}
                rating of any appliances you buy and go for highest rating you
                can afford.
              </p>
            </div>
          </section>
          <section className="resources__card">
            <img
              src={Commute}
              alt="Commute image"
              className="resources__image"
            />
            <div className="resources__content">
              <h3 className="resources__title">Walk Score</h3>
              <p className="resources__description">
                Before you buy or rent a home or apartment, use an app like{" "}
                <a
                  className="resources__link"
                  href="https://www.walkscore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Walk Score
                </a>{" "}
                to determine the walkability of your potential neighborhood.
              </p>
            </div>
          </section>
          <section className="resources__card">
            <img
              src={Inspection}
              alt="Inspection image"
              className="resources__image"
            />
            <div className="resources__content">
              <h3 className="resources__title">Efficiency Inspection</h3>
              <p className="resources__description">
                Insulate your home.{" "}
                <a
                  className="resources__link"
                  href="https://www.nvenergy.com/save-with-powershift/energy-assessment/energy-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a free efficiency inspection from NV Energy
                </a>{" "}
                . Start your insulation in the attic and the roof. Install
                double or triple-paned, argon-filled windows. Do it super-duper:
                insulate your walls.
              </p>
            </div>
          </section>
          <section className="resources__card">
            <img
              src={Pesticide}
              alt="Pesticide image"
              className="resources__image"
            />
            <div className="resources__content">
              <h3 className="resources__title">
                Save bees and other pollinators
              </h3>
              <p className="resources__description">
                Stop using Roundup and other chemical weed killers. One of
                Rounup's ingredients,{" "}
                <a
                  className="resources__link"
                  href="https://www.honeysolutions.com/roundup-what-impact-does-this-herbicide-have-on-bees-and-food/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  kills bees and other pollinators
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
