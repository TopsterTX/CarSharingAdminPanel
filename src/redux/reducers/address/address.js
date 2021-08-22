const defaultState = {
  cities: [],
  points: [],
};

const reduce = "ADDRESS__";
export const GET_CITIES = `${reduce}GET_CITIES`;
export const GET_POINTS = `${reduce}GET_POINTS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
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
