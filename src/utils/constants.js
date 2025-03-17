export const questions = [
  {
    id: "shower-minutes",
    type: "number",
    label: "How many minutes do you typically spend in the shower?",
    placeholder: "Enter minutes here",
    min: "0",
    max: "90",
    step: "1",
  },
  {
    id: "brush-teeth",
    type: "radio",
    label: "Do you turn off the water while you brush your teeth?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "hand-wash",
    type: "radio",
    label: "When washing dishes by hand, do you leave the water running?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "dishwasher-cycles",
    type: "number",
    label: "How many times do you run the dishwasher per week?",
    placeholder: "Enter count here",
    min: "0",
    max: "90",
    step: "1",
  },
  {
    id: "lawn-watering",
    type: "number",
    label: "How often do you water your lawn or garden?",
    placeholder: "Enter minutes here",
    min: "0",
    max: "90",
    step: "1",
  },
  {
    id: "lights-off",
    type: "radio",
    label: "Do you turn off the lights when you leave a room?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "unplug-electronics",
    type: "radio",
    label: "Do you unplug electronics when they are not in use?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "ceiling-fan",
    type: "radio",
    label:
      "Do you use a ceiling fan instead of air conditioning when possible?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "charge-phone",
    type: "radio",
    label: "Do you charge your phone overnight?",
    options: ["Yes", "Sometimes", "No"],
  },
  {
    id: "thermostat",
    type: "radio",
    label:
      "Do you use a programmable thermostat to manage heating and cooling?",
    options: ["Yes", "Sometimes", "No"],
  },
];

export const archetypes = [
  "Earth's Best Ally",
  "Tree Hugger",
  "Sustainable Striver",
  "Resource Reckless",
];
