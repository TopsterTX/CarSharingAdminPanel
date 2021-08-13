import React from "react";
import { useSelector } from "react-redux";
import { Filter } from "../UI/Filter/Filter";
import "./Entities.scss";

export const Entities = () => {
  const { configureFilter } = useSelector((state) => state.entities);

  return (
    <section className="entities">
      <div className="entities__container">
        <h2 className="entities__title">Сущности</h2>
        <div className="entities__block">
          <div className="entities__filter">
            <Filter {...configureFilter} />
          </div>
        </div>
      </div>
    </section>
  );
};
