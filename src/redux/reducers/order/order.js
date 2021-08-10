import { v4 as uuidv4 } from "uuid";

const defaultState = {
  configureFilter: {
    filterItems: [
      {
        id: uuidv4(),
        text: "За неделю",
      },
      {
        id: uuidv4(),
        text: "ELANTRA",
      },
      {
        id: uuidv4(),
        text: "Ульяновск",
      },
      {
        id: uuidv4(),
        text: "В процессе",
      },
    ],
    buttons: [
      {
        id: uuidv4(),
        className: "filter__button",
        text: "Применить",
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
