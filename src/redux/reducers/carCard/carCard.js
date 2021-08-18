const defaultState = {
  editCar: {
    id: "",
    priceMax: 0,
    priceMin: 0,
    name: "Название машины",
    thumbnail: {
      size: 0,
      originalname: "",
      mimetype: "",
      path: null,
    },
    description: "Описание машины",
    categoryId: {
      name: "Категория",
      description: "",
      id: "",
    },
    colors: [],
  },
  inputs: {
    name: "",
    type: "",
    description: "",
    colors: "",
    priceMin: "",
    priceMax: "",
    file: "",
  },
};

const reduce = "CAR-CARD__";
export const GET_EDIT_CAR = `${reduce}GET_CAR`;
export const CHANGE_MODEL_CAR = `${reduce}CHANGE_MODEL_CAR`;
export const CHANGE_DESCRIPTION_CAR = `${reduce}CHANGE_DESCRIPTION_CAR`;
export const CHANGE_TYPE_CAR = `${reduce}CHANGE_TYPE_CAR`;
export const CHANGE_COLORS_CAR = `${reduce}CHANGE_COLORS_CAR`;
export const CHANGE_PRICE_MIN_CAR = `${reduce}CHANGE_PRICE_MIN_CAR`;
export const CHANGE_PRICE_MAX_CAR = `${reduce}CHANGE_PRICE_MAX_CAR`;
export const CHANGE_PHOTO_CAR = `${reduce}CHANGE_PHOTO_CAR`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_EDIT_CAR:
      return {
        ...state,
        editCar: payload,
        copyCar: payload,
      };
    case CHANGE_MODEL_CAR:
      return {
        ...state,
        editCar: { ...state.editCar, name: payload },
      };
    case CHANGE_DESCRIPTION_CAR:
      return {
        ...state,
        editCar: { ...state.editCar, description: payload },
      };
    case CHANGE_TYPE_CAR:
      return {
        ...state,
        editCar: {
          ...state.editCar,
          categoryId: { ...state.editCar.categoryId, name: payload },
        },
      };
    case CHANGE_PRICE_MIN_CAR:
      return {
        ...state,
        editCar: { ...state.editCar, priceMin: payload },
      };
    case CHANGE_PRICE_MAX_CAR:
      return {
        ...state,
        editCar: { ...state.editCar, priceMax: payload },
      };
    

    default:
      return state;
  }
};
