import "./QuizSection.css";

export default function QuizSection() {
  return (
    <div className="quiz-section">
      <section className="quiz page__section">
        <h2 className="quiz__title" id="quiz">
          Energy Saver Quiz
        </h2>
        <form action="" className="quiz__Questions">
          <div className="quiz__Question">
            <label htmlFor="shower-minutes" className="quiz__Question_Desc">
              How many minutes do you typically spend in the shower?
              <input
                type="number"
                id="shower-minutes"
                className="quiz__Question_number_Answer"
                placeholder="enter minutes here"
              />
            </label>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you turn off the water while you brush your teeth?
            </p>
            <div className="quiz__Checkboxes">
              <label
                htmlFor="brush-teeth-yes"
                className="quiz__Question_choice"
              >
                Yes
                <input
                  name="brush-teeth"
                  type="radio"
                  id="brush-teeth-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="brush-teeth-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="brush-teeth"
                  type="radio"
                  id="brush-teeth-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label htmlFor="brush-teeth-no" className="quiz__Question_choice">
                No
                <input
                  name="brush-teeth"
                  type="radio"
                  id="brush-teeth-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              When washing dishes by hand, do you leave the water running?
            </p>
            <div className="quiz__Checkboxes">
              <label
                htmlFor="hand-wash-dish-yes"
                className="quiz__Question_choice"
              >
                Yes
                <input
                  name="hand-wash"
                  type="radio"
                  id="hand-wash-dish-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="hand-wash-dish-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="hand-wash"
                  type="radio"
                  id="hand-wash-dish-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="hand-wash-dish-no"
                className="quiz__Question_choice"
              >
                No
                <input
                  name="hand-wash"
                  type="radio"
                  id="hand-wash-dish-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <label htmlFor="dishwasher-cycles" className="quiz__Question_Desc">
              How many times do you run the dishwasher per week?
              <input
                type="number"
                id="dishwasher-cycles"
                className="quiz__Question_number_Answer"
                placeholder="enter count here"
              />
            </label>
          </div>
          <div className="quiz__Question">
            <label htmlFor="lawn-watering" className="quiz__Question_Desc">
              How often do you water your lawn or garden?
              <input
                type="number"
                id="lawn-watering"
                className="quiz__Question_number_Answer"
                placeholder="enter minutes here"
              />
            </label>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you turn off the lights when you leave a room?
            </p>
            <div className="quiz__Checkboxes">
              <label htmlFor="lights-off-yes" className="quiz__Question_choice">
                Yes
                <input
                  name="lights-off"
                  type="radio"
                  id="lights-off-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="lights-off-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="lights-off"
                  type="radio"
                  id="lights-off-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label htmlFor="lights-off-no" className="quiz__Question_choice">
                No
                <input
                  name="lights-off"
                  type="radio"
                  id="lights-off-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you unplug electronics when they are not in use?
            </p>
            <div className="quiz__Checkboxes">
              <label
                htmlFor="unplug-electronics-yes"
                className="quiz__Question_choice"
              >
                Yes
                <input
                  name="unplug-electronics"
                  type="radio"
                  id="unplug-electronics-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="unplug-electronics-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="unplug-electronics"
                  type="radio"
                  id="unplug-electronics-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="unplug-electronics-no"
                className="quiz__Question_choice"
              >
                No
                <input
                  name="unplug-electronics"
                  type="radio"
                  id="unplug-electronics-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you use a ceiling fan instead of air conditioning when
              possible?
            </p>
            <div className="quiz__Checkboxes">
              <label
                htmlFor="ceiling-fan-yes"
                className="quiz__Question_choice"
              >
                Yes
                <input
                  name="ceiling-fan"
                  type="radio"
                  id="ceiling-fan-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="ceiling-fan-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="ceiling-fan"
                  type="radio"
                  id="ceiling-fan-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label htmlFor="ceiling-fan-no" className="quiz__Question_choice">
                No
                <input
                  name="ceiling-fan"
                  type="radio"
                  id="ceiling-fan-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you charge your phone overnight?
            </p>
            <div className="quiz__Checkboxes">
              <label
                htmlFor="charge-phone-yes"
                className="quiz__Question_choice"
              >
                Yes
                <input
                  name="charge-phone"
                  type="radio"
                  id="charge-phone-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="charge-phone-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="charge-phone"
                  type="radio"
                  id="charge-phone-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="charge-phone-no"
                className="quiz__Question_choice"
              >
                No
                <input
                  name="charge-phone"
                  type="radio"
                  id="charge-phone-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
          <div className="quiz__Question">
            <p className="quiz__Question_Desc">
              Do you use a programmable thermostat to manage heating and
              cooling?
            </p>
            <div className="quiz__Checkboxes">
              <label htmlFor="thermostat-yes" className="quiz__Question_choice">
                Yes
                <input
                  name="thermostat"
                  type="radio"
                  id="thermostat-yes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label
                htmlFor="thermostat-sometimes"
                className="quiz__Question_choice"
              >
                Sometimes
                <input
                  name="thermostat"
                  type="radio"
                  id="thermostat-sometimes"
                  className="quiz__Question_choice_Answer"
                />
              </label>
              <label htmlFor="thermostat-no" className="quiz__Question_choice">
                No
                <input
                  name="thermostat"
                  type="radio"
                  id="thermostat-no"
                  className="quiz__Question_choice_Answer"
                />
              </label>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
