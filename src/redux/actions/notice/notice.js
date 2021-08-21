import { OPEN, WARNING } from "../../reducers/notice/notice";

export const openNotice = (bool) => {
  return {
    type: OPEN,
    payload: bool,
  };
};

export const warningNotice = (bool) => {
  return {
    type: WARNING,
    payload: bool,
  };
};
