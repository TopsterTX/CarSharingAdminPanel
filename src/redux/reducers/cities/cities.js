import { v4 as uuidv4 } from "uuid";

const defaultState = {
  cities: [],
  count: 0,
  limit: 5,
  citiiesOnPage: [],
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

const reduce = "CITIES__";
export const GET_CITIES = `${reduce}GET_CITIES`;
export const GET_CITIES_ON_PAGE = `${reduce}GET_CITIES_ON_PAGE`;
export const GET_COUNT = `${reduce}GET_COUNT`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_COUNT:
      return {
        ...state,
        count: payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    case GET_CITIES_ON_PAGE:
      return {
        ...state,
        citiesOnPage: payload,
      };
    default:
      return state;
  }
};
