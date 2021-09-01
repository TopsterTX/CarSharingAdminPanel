import { v4 } from "uuid";
import { ReactComponent as ErrorIcon } from "../../../icons/navbar/Error.svg";
import { ReactComponent as Pen } from "../../../icons/navbar/Pen.svg";
import { ReactComponent as Forms } from "../../../icons/navbar/Forms.svg";
import { ReactComponent as NewPost } from "../../../icons/navbar/NewPost.svg";
import { ReactComponent as Overview } from "../../../icons/navbar/Overview.svg";

const defaultState = {
  asideMenuIsOpen: false,
  asideItems: [
    {
      id: v4(),
      title: "Карточка заказа",
      icon: <Forms className="aside__item-icon"></Forms>,
      path: "/admin/panel/card_order",
    },
    {
      id: v4(),
      title: "Карточка автомобиля",
      icon: <Pen className="aside__item-icon"></Pen>,
      path: "/admin/panel/card_car",
    },
    {
      id: v4(),
      title: "Список авто",
      icon: <Forms className="aside__item-icon"></Forms>,
      path: "/admin/panel/main",
    },
    {
      id: v4(),
      title: "Заказы",
      icon: <NewPost className="aside__item-icon"></NewPost>,
      path: "/admin/panel/orders",
    },
    {
      id: v4(),
      title: "Адреса",
      icon: <Overview className="aside__item-icon"></Overview>,
      path: "/admin/panel/address",
    },
    {
      id: v4(),
      title: "Города",
      icon: <ErrorIcon className="aside__item-icon"></ErrorIcon>,
      path: "/admin/panel/cities",
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
