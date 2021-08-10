import React from "react";
import { Filter } from "../Orders/Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import "./Entities.scss";

export const Entities = () => {
  const configureFilter = {
    filterItems: [
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
      {
        id: uuidv4(),
        text: "Field",
      },
    ],
    buttons: [
      {
        id: uuidv4(),
        className: "filter__button",
        text: "Применить",
      },
      {
        id: uuidv4(),
        className: "filter__button --warning",
        text: "Сбросить",
      },
    ],
  };

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
