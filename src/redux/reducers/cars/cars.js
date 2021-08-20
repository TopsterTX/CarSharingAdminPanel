import { v4 as uuidv4 } from "uuid";

const defaultState = {
  page: 1,
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
export const CHANGE_PAGE = `${reduce}CHANGE_PAGE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CARS:
      return {
        ...state,
        cars: payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};
