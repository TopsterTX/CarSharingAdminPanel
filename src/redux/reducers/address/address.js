import { v4 as uuidv4 } from "uuid";

const defaultState = {
  pointsOnPage: [],
  count: 0,
  limit: 5,
  points: [],
  page: 1,
  changedCity: {},
};

const reduce = "ADDRESS__";

export const GET_POINTS = `${reduce}GET_POINTS`;
export const GET_POINTS_ON_PAGE = `${reduce}GET_POINTS_ON_PAGE`;
export const GET_COUNT = `${reduce}GET_COUNT`;
export const CHANGE_PAGE = `${reduce}CHANGE_PAGE`;
export const CHANGED_CITY = `${reduce}CHANGED_CITY`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    case CHANGED_CITY:
      return {
        ...state,
        changedCity: payload,
      };
    case GET_COUNT:
      return {
        ...state,
        count: payload,
      };
    case GET_POINTS_ON_PAGE:
      return {
        ...state,
        pointsOnPage: payload,
      };

    case GET_POINTS:
      return {
        ...state,
        points: payload,
      };
    default:
      return state;
  }
};
