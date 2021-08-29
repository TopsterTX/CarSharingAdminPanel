import { v4 as uuidv4 } from "uuid";

const defaultState = {
  pointsOnPage: [],

  points: [],
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

const reduce = "ADDRESS__";

export const GET_POINTS = `${reduce}GET_POINTS`;
export const GET_POINTS_ON_PAGE = `${reduce}GET_POINTS_ON_PAGE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
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