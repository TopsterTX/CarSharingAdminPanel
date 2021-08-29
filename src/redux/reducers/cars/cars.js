import { v4 as uuidv4 } from "uuid";

const defaultState = {
  count: 0,
  page: 1,
  carsOnPage: [],
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
export const GET_CARS_ON_PAGE = `${reduce}GET_CARS_ON_PAGE`;
export const GET_COUNT = `${reduce}GET_COUNT`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_COUNT:
      return {
        ...state,
        count: payload,
      };
    case GET_CARS:
      return {
        ...state,
        cars: payload,
      };
    case GET_CARS_ON_PAGE:
      return {
        ...state,
        carsOnPage: payload,
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
