import { v4 as uuidv4 } from "uuid";

const defaultState = {
  cities: [],
  count: 0,
  limit: 5,
  citiiesOnPage: [],
  page: 1,
};

const reduce = "CITIES__";
export const GET_CITIES = `${reduce}GET_CITIES`;
export const GET_CITIES_ON_PAGE = `${reduce}GET_CITIES_ON_PAGE`;
export const GET_COUNT = `${reduce}GET_COUNT`;
export const CHANGE_PAGE = `${reduce}CHANGE_PAGE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
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
