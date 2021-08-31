import { v4 as uuidv4 } from "uuid";

const defaultState = {
  page: 1,
  count: 0,
  limit: 3,
  carsOnPage: [],
  cars: [],
  categories: [],
  changedCategory: {},
  inputMinPrice: "",
  inputMaxPrice: "",
};

const reduce = "CARS";
export const GET_CARS = `${reduce}GET_CARS`;
export const GET_COUNT = `${reduce}GET_COUNT`;
export const CHANGE_PAGE = `${reduce}CHANGE_PAGE`;
export const WARNING_FILTER = `${reduce}WARNING_FILTER`;
export const GET_CATEGORIES = `${reduce}GET_CATEGORIES`;
export const GET_CARS_ON_PAGE = `${reduce}GET_CARS_ON_PAGE`;
export const CHANGED_CATEGORY = `${reduce}CHANGED_CATEGORY`;
export const CHANGE_FILTER_MIN_PRICE = `${reduce}CHANGE_FILTER_MIN_PRICE`;
export const CHANGE_FILTER_MAX_PRICE = `${reduce}CHANGE_FILTER_MAX_PRICE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGED_CATEGORY:
      return {
        ...state,
        changedCategory: payload,
      };
    case CHANGE_FILTER_MAX_PRICE:
      return {
        ...state,
        inputMaxPrice: payload,
      };
    case CHANGE_FILTER_MIN_PRICE:
      return {
        ...state,
        inputMinPrice: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case WARNING_FILTER:
      return {
        ...state,
        configureFilter: {
          ...state.configureFilter,
          filterItems: state.configureFilter.filterItems.find(
            (item) => payload.text === item.text
          ),
        },
      };
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
