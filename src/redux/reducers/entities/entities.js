import { v4 as uuidv4 } from "uuid";

const defaultState = {
  configureFilter: {
    filterItems: [
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
    ],
    buttons: [
      {
        id: uuidv4(),
        className: "filter__button",
        text: "Применить",
      },
      {
        id: uuidv4(),
        className: "filter__button --warning",
        text: "Сбросить",
      },
    ],
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
