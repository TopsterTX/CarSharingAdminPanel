import { v4 as uuidv4 } from "uuid";

const defaultState = {
  cars: [],
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
        text: "Применить",
      },
    ],
  },
};

const reduce = "CARS";
export const GET_CARS = `${reduce}GET_CARS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CARS:
      return {
        ...state,
        cars: payload,
      };
    default:
      return state;
  }
};
