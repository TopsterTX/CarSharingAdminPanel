import { SHOW } from "./../reducers/loader/loader";

export const showLoader = (bool) => {
  return {
    type: SHOW,
    payload: bool,
  };
};
