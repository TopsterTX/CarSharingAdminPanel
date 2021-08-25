const defaultState = {
  editAddress: {
    id: "",
    address: "",
    name: "",
    cityId: {
      name: "",
      id: "",
    },
  },
  copyAddress: {
    id: "",
    address: "",
    name: "",
    cityId: {
      name: "",
      id: "",
    },
  },
};

const reduce = "ADDRESS-CARD__";
export const CHANGE_POINT_NAME = `${reduce}CHANGE_POINT_NAME`;
export const CHANGE_ADDRESS_NAME = `${reduce}CHANGE_ADDRESS_NAME`;
export const CHANGE_CITY_IN_POINT = `${reduce}CHANGE_CITY_IN_POINT`;
export const CANCEL_EDIT_POINT = `${reduce}CANCEL_EDIT_POINT`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_ADDRESS_NAME:
      return {
        ...state,
        editAddress: { ...state.editAddress, address: payload },
      };
    case CANCEL_EDIT_POINT:
      return {
        ...state,
        editAddress: state.copyAddress,
      };

    case CHANGE_POINT_NAME:
      return {
        ...state,
        editAddress: { ...state.editAddress, name: payload },
      };
    case CHANGE_CITY_IN_POINT:
      return {
        ...state,
        editAddress: { ...state.editAddress, cityId: payload },
      };
    default:
      return state;
  }
};
