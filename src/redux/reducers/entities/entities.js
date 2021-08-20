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
        type: "warning",
        text: "Сбросить",
      },
      {
        id: uuidv4(),
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
