import React, { memo } from "react";
import { useSelector } from "react-redux";
import { AsideItem } from "./AsideItem/AsideItem";
import logo from "../../../icons/Logo.svg";
import "./Aside.scss";

const AsideInner = () => {
  const { asideItems, asideMenuIsOpen } = useSelector((state) => state.aside);

  return (
    <aside className={`aside ${asideMenuIsOpen ? "active" : ""}`}>
      <div className="aside__container">
        <div className="aside__wrapper">
          <div className="aside__head">
            <img src={logo} alt="" width="21px" height="21px" />
            <span className="aside__title">Need for car</span>
          </div>
          <ul className="aside__list">
            {asideItems.map((el) => {
              return <AsideItem item={el} key={el.id} />;
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export const Aside = memo(AsideInner);
