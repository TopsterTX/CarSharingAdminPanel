import { CHANGE_IS_OPEN_ASIDE_MENU } from "../../reducers/aside/aside";

export const changeIsOpenAsideMenu = (bool) => {
  return {
    type: CHANGE_IS_OPEN_ASIDE_MENU,
    payload: bool,
  };
};
