import { v4 } from "uuid";
import pen from "../../../icons/Pen.svg";
import forms from "../../../icons/Forms.svg";
import newPost from "../../../icons/NewPost.svg";
import error from "../../../icons/Error.svg";
import overview from "../../../icons/Overview.svg";

const defaultState = {
  asideMenuIsOpen: false,
  asideItems: [
    {
      id: v4(),
      title: "Карточка автомобиля",
      icon: pen,
      path: "/admin/panel/main",
    },
    {
      id: v4(),
      title: "Список авто",
      icon: forms,
      path: "/admin/panel/cars",
    },
    {
      id: v4(),
      title: "Заказы",
      icon: newPost,
      path: "/admin/panel/orders",
    },
    {
      id: v4(),
      title: "Меню 4",
      icon: overview,
      path: "/admin/panel/orders",
    },
    {
      id: v4(),
      title: "Меню 5",
      icon: error,
      path: "/admin/panel/orders",
    },
  ],
};

const reduce = "ASIDE_";
export const CHANGE_IS_OPEN_ASIDE_MENU = `${reduce}CHANGE_IS_OPEN_ASIDE_MENU`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_IS_OPEN_ASIDE_MENU:
      return { ...state, asideMenuIsOpen: payload };
    default:
      return state;
  }
};
