import { OPEN } from "../../reducers/notice/notice";

export const openNotice = (bool) => {
  return {
    type: OPEN,
    payload: bool,
  };
};
