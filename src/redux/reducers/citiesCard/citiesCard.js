const defaultState = {
  editCity: {
    id: "",
    name: "",
  },
  copyCity: {
    id: "",
    name: "",
  },
};

const reduce = "CITIES-CARD__";
export const CHANGE_CITY_NAME = `${reduce}CHANGE_CITY_NAME`;
export const CANCEL_EDIT_CITY = `${reduce}CANCEL_EDIT_CITY`;
export const GET_EDIT_CITY = `${reduce}GET_EDIT_CITY`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_CITY_NAME:
      return {
        ...state,
        editCity: { ...state.editCity, name: payload },
      };
    case CANCEL_EDIT_CITY:
      return {
        ...state,
        editCity: state.copyCity,
      };
    case GET_EDIT_CITY:
      return {
        ...state,
        editCity: payload,
        copyCity: payload,
      };
    default:
      return state;
  }
};
